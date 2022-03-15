import { createContext, useState } from "react";
import { data } from "./data";


const UserContext = createContext()

export const UserProvider = ({children})=>{
    const [users, setUsers] = useState(data);

    return <UserContext.Provider value = {{users, setUsers}}>
        {children}
    </UserContext.Provider>
}

export default UserContext;