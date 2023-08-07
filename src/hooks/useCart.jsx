import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProviders';
 import {useQuery} from '@tanstack/react-query'


const useCart = email =>{
    const token = localStorage.getItem('access-token')
    const {user} = useContext(AuthContext)
    const { isLoading,refetch, data : cart=[]} = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async ()=>{
            const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`,{
                headers:{
                    authorization: `bearer ${token}`
                }
            })
            return response.json()
        },
      })
      return [cart, refetch]
}

export default useCart;