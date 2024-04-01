import React from 'react'
import {useSelector} from 'react-redux'
import { usreCurrentToken } from '../App/featchers/auth/authSlice'
import {Navigate} from 'react-router-dom'

function RequiredRoute({children}) {
  const token = useSelector(usreCurrentToken)

    if(!token){
        return <Navigate to='/login' replace={true} />
    }

    return children
}

export default RequiredRoute