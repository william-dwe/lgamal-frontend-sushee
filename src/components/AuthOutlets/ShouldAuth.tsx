import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Navigate, Outlet, useLocation } from 'react-router-dom'
import { selectCurrentToken, setCredentials } from '../../features/authSlice'
import { useRefreshQuery } from '../../features/authSlice/authApiSlice'
import jwtDecode from 'jwt-decode'


const ShouldAuth = () : JSX.Element => {
    const location = useLocation()
    const dispatch = useDispatch()

    const {
        data: response,
        isLoading,
        isSuccess,
        isError,
        error
    } = useRefreshQuery()
    const authToken = useSelector(selectCurrentToken)

    useEffect(() => {
        if (isSuccess) {
            const newAccessToken = response.data.access_token
            const userDetail = jwtDecode(newAccessToken) as any
            const username = userDetail.username
            dispatch(setCredentials({...response, username}))
        }
    }, [response])

    const content = (
        authToken 
        ? <Outlet/>
        : isLoading
            ? <h1>loading...</h1>
            : <Navigate to="/login" state={{from: location}} replace/> 
    )
    return content
} 
 
export default ShouldAuth