import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { selectCurrentToken, setCredentials } from '../../features/authSlice'
import { useRefreshQuery } from '../../features/authSlice/authApiSlice'
import jwtDecode from 'jwt-decode'


const ShouldNotAuth = () : JSX.Element => {
    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {
        data: response,
        isLoading,
        isSuccess,
        isError,
        error
    } = useRefreshQuery()
    const authToken = useSelector(selectCurrentToken)

    useEffect(() => {
        if (isSuccess && !authToken) {
            const newAccessToken = response.data.accessToken
            const userDetail = jwtDecode(newAccessToken) as any
            const username = userDetail.username
            dispatch(setCredentials({...response, username}))
        }
    }, [response])
    useEffect(()=>{
        if (authToken) {
            navigate('/')
        }
    },[authToken])

    const content = ( 
        isLoading && isError
            ? <h1>Loading..</h1>
            : <Outlet/>
    )
    return content
} 
 
export default ShouldNotAuth