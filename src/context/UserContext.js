import { createContext, useState } from "react";
// import { data } from "./data";
import data  from "./nftImage.json";



const UserContext = createContext()

 const roadmap = [
   {
     id: 1,
     title: "Super-limited",
     description:
       "We just limited it to 27 supply. That was deliberate and, super-thoughtful.<br/><br/>Each of the Savage has a story and when you own the NFT, you own the story.",
   },
   {
     id: 2,
     title: "Manual Mint",
     description:
       "We made it manual mint rather than a random one. So that you don't have to own a story that doesn't resonate with you.<br/><br/>Miniature Community By the 27 limit, we'll only have the most valuable members join our community. ",
   },
   {
     id: 3,
     title: "Miniature Community",
     description:
       "By the 27 limit, we'll only have the most valuable members join our community.",
   },
   {
     id: 4,
     title: "Future-centric",
     description:
       "Right now two of the savage are married with each other and have a baby son. <br/><br/> In future we'll have a few other versions of boys + girls mix, which you can use to reproduce a new NFT.<br/><br/>Or this might be a serum, which you'll get for free.",
   },
   {
     id: 5,
     title: "You drive",
     description:
       "We are new to the NFT and metaverse space. We don't know much, we're still learning. You can guide us any way you want to take this project forward.<br/><br/>[Also: We have a startup idea in the pipeline]",
   },
 ];

export const UserProvider = ({children})=>{
    const [users, setUsers] = useState(data);

    return <UserContext.Provider value = {{users, setUsers, roadmap}}>
        {children}
    </UserContext.Provider>
}

export default UserContext;