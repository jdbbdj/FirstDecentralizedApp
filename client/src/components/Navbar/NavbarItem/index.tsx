import React from 'react'

interface Props{
    key:any,
    title:string;
    classProps:any;
}

const NavbarItem:React.FC<Props> = ({key, title, classProps}):React.ReactElement => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    )
}

export default NavbarItem
