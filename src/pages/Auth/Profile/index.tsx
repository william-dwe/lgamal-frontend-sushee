import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputField from '../../../components/InputField'
import { selectCurrentToken } from '../../../features/authSlice'
import { selectCurrentUser } from '../../../features/userSlice'
import jwtDecode from 'jwt-decode'
import {ITokenContent, IUserContext, IRes} from '../../../entity'
import { useProfileQuery } from '../../../features/userSlice/authApiSlice'


const Profile = (): JSX.Element => {
    const [fullName, setFullName] = React.useState('')
    const [username, setUsername] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [phone, setPhone] = React.useState('')

    const {
        data: response,
        isLoading,
        isSuccess,
        isError,
        error
    } = useProfileQuery()
    
    const authToken = useSelector(selectCurrentToken)
    useEffect(()=>{
        if (response){
            setFullName(response.data.FullName)
            setUsername(response.data.Username)
            setEmail(response.data.Email)
            setPhone(response.data.Phone)
        }
    }, [response])


    const [toggleEdit, setToggleEdit] = React.useState(false)
    const [refreshRes, setRefreshRes] = React.useState<IRes>()
    

    //todo: change logic from using JWT --> fetch query me
    //todo: add changes for user profile & password

    const handleFullNameInput = (e: any) => setFullName(e.target.value)
    const handleUsernameInput = (e: any) => setUsername(e.target.value)
    const handleEmailInput = (e: any) => setEmail(e.target.value)
    const handlePhoneInput = (e: any) => setPhone(e.target.value)

    const dispatch = useDispatch()

    const handleEdit = (e: any) => {
        e.preventDefault()
        setToggleEdit(true)
    }
    const handleSubmit = (e: any) => {
        e.preventDefault()
    }

    const content = (
        !authToken
        ? <h1>Loading...</h1>
        :<section className='Profile'>
            <h1>Profile</h1>
            <form className='content' onSubmit={handleSubmit}>
                <InputField
                    title='Full Name'
                    type='text'
                    textInputProps={{value:fullName, isDisabled: !toggleEdit}}
                    stateHandler={handleFullNameInput}
                />
                <InputField
                    title='Username'
                    type='text'
                    textInputProps={{value:username, isDisabled: !toggleEdit}}
                    stateHandler={handleUsernameInput}
                />
                <InputField
                    title='Email'
                    type='text'
                    textInputProps={{value:email, isDisabled: !toggleEdit}}
                    stateHandler={handleEmailInput}
                />
                <InputField
                    title='Phone'
                    type='text'
                    textInputProps={{value:phone, isDisabled: !toggleEdit}}
                    stateHandler={handlePhoneInput}
                />
                {
                    toggleEdit
                    ? <button type='submit'>Submit</button>
                    : <button onClick={handleEdit}>Edit</button>
                }
            </form>
        </section>
    )
    return content
}

export default Profile