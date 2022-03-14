import { createContext, useState } from "react";
import nftImage1 from '../assets/nft-image.png'

const UserContext = createContext()

export const UserProvider = ({children})=>{
    const [users, setUsers] = useState([
        {
            id: 1,
            img: nftImage1,
            nft_name: 'Chinto Savage',
            price: 0.2,
            url: "#"
            
        },
        {
            id: 2,
            img: nftImage1,
            nft_name: 'Savage 2',
            price: 0.7,
            url: "#"
            
        },
        {
            id: 3,
            img: nftImage1,
            nft_name: 'Savage 3',
            price: 0.5,
            url: "#"
            
        },
        {
            id: 3,
            img: nftImage1,
            nft_name: 'Savage 4',
            price: 0.5,
            url: "#"
            
        },
        {
            id: 3,
            img: nftImage1,
            nft_name: 'Savage 4',
            price: 0.5,
            url: "#"
            
        },
        {
            id: 3,
            img: nftImage1,
            nft_name: 'Savage 4',
            price: 0.5,
            url: "#"
            
        },
        {
            id: 3,
            img: nftImage1,
            nft_name: 'Savage 4',
            price: 0.5,
            url: "#"
            
        },
        {
            id: 3,
            img: nftImage1,
            nft_name: 'Savage 4',
            price: 0.5,
            url: "#"
            
        },
    ]);

    return <UserContext.Provider value = {{users, setUsers}}>
        {children}
    </UserContext.Provider>
}

export default UserContext;