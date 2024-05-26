'use client'

import React from 'react'
import Image from 'next/image';
import MenuIcon from '@rsuite/icons/Menu';
import { Input, InputGroup } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
const styles = {
    width: "50vw",
    marginBottom: 10,

    
};

const TopNav = ({ handelEcpand }) => {

    return (
        <div className='navBar'>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}  >
                <div  className='menu' onClick={() => handelEcpand()} style={{ marginLeft: "10px" }}>
                    <MenuIcon width={20} height={20} ></MenuIcon>
                </div>
                <Image src="/Logo.png" width={110} height={50} ></Image>

            </div>
            <div className='search'>
                <InputGroup inside style={styles}>
                <InputGroup.Button>
                        <SearchIcon />
                    </InputGroup.Button>
                    <Input />
                    
                </InputGroup>
            </div>
            <div className='options'>
                <Image src="/Right.png" width={180} height={50} ></Image>

            </div>

        </div>
    )
}

export default TopNav