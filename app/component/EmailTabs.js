'use client'
import React, { useState } from 'react'
import { Checkbox } from 'rsuite';
import EmailModal from './Email';

const EmailTabs = ({ data }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => setOpen(false);
    return (
        <div className='emailtab' >
            <div style={{ display: "flex", gap: "10px" }} >
                <div>
                    <Checkbox><strong>{data.senderName}</strong></Checkbox>
                </div>
                <div style={{ display: "flex", alignItems: "center" }} onClick={handleOpen}>
                    <strong>{data.subject}</strong>
                    <div className='content' >{data.content}</div>
                </div></div>
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