import React from 'react'
import { useTableUser } from '../components/userTable'

function Users() {
  
  const userTable = useTableUser('users')  
    
  return (
    <>
        {userTable}
    </>
  )
}

export default Users