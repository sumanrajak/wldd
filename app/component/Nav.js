import React from 'react'
import { Sidenav, Nav, Toggle } from 'rsuite';

import EditIcon from '@rsuite/icons/Edit';
import EmailIcon from '@rsuite/icons/Email';
import TrashIcon from '@rsuite/icons/Trash';
import TimeRoundIcon from '@rsuite/icons/TimeRound';
import SendIcon from '@rsuite/icons/Send';
import PageIcon from '@rsuite/icons/Page';
const SideNavbar = ({ expanded }) => {
    const [activeKey, setActiveKey] = React.useState('1');


    return (
        <div className='sidenav' >
            <Sidenav expanded={expanded} defaultOpenKeys={['3', '4']}  >
                <Sidenav.Body>
                    <Nav activeKey={activeKey} onSelect={setActiveKey} style={{ height: "90vh", width: "100%" }}>

                        <Nav.Item eventKey="10" icon={!expanded ? <EditIcon /> : <></>}>

                            <div className='compose'> <EditIcon /> <div>compose</div></div>
                        </Nav.Item>
                        <Nav.Item eventKey="21" icon={<EmailIcon />}>
                            Inbox
                        </Nav.Item>
                        <Nav.Item eventKey="22" icon={<TrashIcon />}>
                            Trash
                        </Nav.Item>
                        <Nav.Item eventKey="23" icon={<TimeRoundIcon />}>
                            Snoozed
                        </Nav.Item>
                        <Nav.Item eventKey="4" icon={<SendIcon />}>
                            Sent
                        </Nav.Item>
                        <Nav.Item eventKey="25" icon={<PageIcon />}>
                            Draft
                        </Nav.Item>

                        <Nav.Menu
                            placement="rightStart"
                            eventKey="4"
                            title="Lables"

                        >
                            <Nav.Item eventKey="4-1">Applications</Nav.Item>
                            <Nav.Item eventKey="4-2">Channels</Nav.Item>
                            <Nav.Item eventKey="4-3">Versions</Nav.Item>
                            <Nav.Menu eventKey="4-5" title="Files">
                                <Nav.Item eventKey="4-5-1">file 1</Nav.Item>
                                <Nav.Item eventKey="4-5-2">file2</Nav.Item>
                            </Nav.Menu>
                        </Nav.Menu>
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
        </div>
    )
}

export default SideNavbar


