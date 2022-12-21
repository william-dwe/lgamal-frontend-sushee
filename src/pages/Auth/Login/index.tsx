import React from 'react'
import { useLocation, useNavigate } from 'react-router'
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../../features/authSlice';
import { useLoginMutation } from '../../../features/authSlice/authApiSlice';
import './index.scss'
import InputField from '../../../components/InputField';

export default function Login():JSX.Element {
    const [identifier, setIdentifier] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [login, { isLoading }] = useLoginMutation()

    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        try {
            const userData = await login({identifier, password}).unwrap()
            dispatch(setCredentials({...userData, identifier}))
            setIdentifier('')
            setPassword('')
            navigate(location.state?location.state.from.pathname:"/")
        } catch (err) {
            console.log(err)
        }
    }

    const handleIdentifierInput = (e: any) => setIdentifier(e.target.value)
    const handlePasswordInput = (e: any) => setPassword(e.target.value)

    const content = isLoading ? <h1>Loading...</h1> : (
        <section className='login'>
            <h1>Login</h1>
            <form className='content' onSubmit={handleSubmit}>
                <InputField
                    title='Username/ Email'
                    type='text'
                    textInputProps={{placeholder:'user@mail.com'}}
                    stateHandler={handleIdentifierInput}
                />
                <InputField
                    title='Password'
                    type='password'
                    textInputProps={{placeholder:'*******'}}
                    stateHandler={handlePasswordInput}
                />
                <button type='submit'>Submit</button>
            </form>
        </section>
    )
    return content
}