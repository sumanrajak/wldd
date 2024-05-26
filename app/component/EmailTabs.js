'use client'
import React, { useState } from 'react'
import { Checkbox } from 'rsuite';
import EmailModal from './Email';

const EmailTabs = ({ data }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const setColor=()=>{
        switch (data.type) {
            case "Promotion":
                return "lightblue"
                break;
                case "Social":
                    return " lightgreen"
                    break;
            default:
                break;
        }
    }
    const handleClose = () => setOpen(false);
    return (
        <div className='emailtab' >
            {/* <div style={{ display: "flex", gap: "10px" }} > */}
                <div className='checkbox'>
                    <Checkbox><strong>{data.senderName}</strong></Checkbox>
                </div>
                <div  className="midTsb" onClick={handleOpen}>
                    <div className='inbox' style={{backgroundColor:setColor()}}>{data.type?data.type:"Inbox"}</div>
                    <div style={{whiteSpace:"nowrap"}}> <strong>{data.subject}</strong></div>
                    <div className='content' > - {data.content}</div>
                </div>
                
            <div>
                {data.date}
            </div>
            {open ? (
                <EmailModal open={open} handleClose={handleClose} email={data} />
            ) : (
                <></>
            )}
        </div>
    )
}

export default EmailTabs