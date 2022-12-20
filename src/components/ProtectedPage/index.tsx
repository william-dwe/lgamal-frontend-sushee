import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Navigate, Outlet, useLocation } from 'react-router-dom'
import { selectCurrentToken, setCredentials } from '../../features/authSlice'
import { useRefreshQuery } from '../../features/authSlice/authApiSlice'
import jwtDecode from 'jwt-decode'


const ProtectedPage = () : JSX.Element => {
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
        if (isSuccess && !authToken) {
            const newAccessToken = response.data.accessToken
            const userDetail = jwtDecode(newAccessToken) as any
            const username = userDetail.user.Username
            dispatch(setCredentials({...response, username}))
        }
    }, [response])

    const content = !authToken && !isError ? <h1>Loading ...</h1> : (
        authToken
        ? <Outlet/>
        : <Navigate to="/login" state={{from: location}} replace/>
    )
    return content
} 

export default ProtectedPage