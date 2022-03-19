import { createContext, useState } from "react";
// import { data } from "./data";
import data  from "./nftImage.json";



const UserContext = createContext()

 const roadmap = [
   {
     id:1,
     title: "title-1",
     description:
       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestiae harum itaque."
   },
   {
    id: 2,
     title: "title-2",
     description:
       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestiae harum itaque."
   },
   {
    id:3,
     title: "title-3",
     description:
       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestiae harum itaque."
   },
   {
    id:4,
     title: "title-4",
     description:
       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestiae harum itaque."
   },
 ];

export const UserProvider = ({children})=>{
    const [users, setUsers] = useState(data);

    return <UserContext.Provider value = {{users, setUsers, roadmap}}>
        {children}
    </UserContext.Provider>
}

export default UserContext;