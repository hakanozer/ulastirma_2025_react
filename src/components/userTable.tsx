import { useEffect, useState } from "react"
import { apiConfig } from "../services/apiConfig"

export const useTableUser = (url: string) => {
    const [users, setUsers] = useState<any[]>([])
    const params = {
        page: 1,
        per_page: 10
    }
    useEffect(() => {
        apiConfig.get(url, {params: params}).then(res => {
            setUsers(res.data.data)
        })
    }, [])
    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name / Surname</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((item, index) => 
                        <tr key={index}>
                            <th scope="row">{item.id}</th>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                        </tr>
                    )}                    
                </tbody>
            </table>
        </>
    )
}