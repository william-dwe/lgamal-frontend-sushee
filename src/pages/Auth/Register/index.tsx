import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { setCredentials } from '../../../features/authSlice';
import { useRegisterMutation } from '../../../features/authSlice/authApiSlice';
import './index.scss'
import InputField from '../../../components/InputField';

export default function Register():JSX.Element {
    const [fullName, setFullName] = React.useState('')
    const [username, setUsername] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [register, { isLoading }] = useRegisterMutation()


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        try {
          const userData = await register({fullName, email, phone, username, password}).unwrap()
          dispatch(setCredentials({...userData, username}))
          setFullName('')
          setUsername('')
          setEmail('')
          setPassword('')
          navigate('/')
        } catch (err) {
          console.log(err)
        }
    }

    const handleFullNameInput = (e: any) => setFullName(e.target.value)
    const handleUsernameInput = (e: any) => setUsername(e.target.value)
    const handlePhoneInput = (e: any) => setPhone(e.target.value)
    const handleEmailInput = (e: any) => setEmail(e.target.value)
    const handlePasswordInput = (e: any) => setPassword(e.target.value)

    const content =  isLoading ? <h1>Loading...</h1> : (
    <section className='register'>
        <h1>Register</h1>
        <form className="content" onSubmit={handleSubmit}>
            <InputField
                title='Full Name'
                type='text'
                textInputProps={{placeholder: 'tatang sutarma'}}
                stateHandler={handleFullNameInput}
            />
            <InputField
                title='Username'
                type='text'
                textInputProps={{placeholder: 'tatangs123'}}
                stateHandler={handleUsernameInput}
            />
            <InputField
                title='Phone'
                type='text'
                textInputProps={{placeholder: '054375834'}}
                stateHandler={handlePhoneInput}
            />
            <InputField
                title='Email'
                type='text'
                textInputProps={{placeholder: 'tatangs@mail.com'}}
                stateHandler={handleEmailInput}
            />
            <InputField
                title='Password'
                type='password'
                textInputProps={{placeholder: '*********'}}
                stateHandler={handlePasswordInput}
            />
            < button type='submit'>Register</button>
        </form>
    </section>
    )

    return content
}