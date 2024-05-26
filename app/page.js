"use client"
import EmailTabs from "./component/EmailTabs";
import { Nav } from 'rsuite';
import React from "react";
import TagIcon from '@rsuite/icons/Tag';
import PeoplesIcon from '@rsuite/icons/Peoples';
import EmailIcon from '@rsuite/icons/Email';

export default function Home() {
  const [active, setActive] = React.useState('All');

  const email = [
    {
      email: "sumanrajak@gmail.com",
      subject: "Hi",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      senderName: "John Doe",
      date: "May 23",
      type:"Promotion"
    },
    {
      email: "example@example.com",
      subject: "Greetings",
      content: "Hello! I hope this email finds you well. We have some exciting news to share.",
      senderName: "Jane Smith",
      date: "May 23",
      type:"Promotion"
    },
    {
      email: "john.doe@example.com",
      subject: "Important Update",
      content: "Dear recipient, we have an important update regarding your account. Please review the attached document for details.",
      senderName: "Support Team",
      date: "May 23",
      type:"Promotion"
    },
    {
      email: "jane.smith@example.com",
      subject: "Meeting Invitation",
      content: "Hello, you are invited to a team meeting at 2 PM. The agenda includes project updates and upcoming deadlines.",
      senderName: "Project Manager",
      date: "May 23",
      type:"Social"

    },
    {
      email: "another@example.com",
      subject: "Another Subject",
      content: "This is another example email content with more than 30 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      senderName: "Alex Johnson",
      date: "May 23",
      type:"Primary"
    },
    {
      email: "test@example.com",
      subject: "Test Email",
      content: "This is a test email for verification purposes. Please confirm receipt by replying to this message.",
      senderName: "Quality Assurance",
      date: "May 23",
      type:"Primary"

    },
    {
      email: "info@example.com",
      subject: "Information Request",
      content: "Please provide the requested information at your earliest convenience. We appreciate your prompt response.",
      senderName: "Customer Support",
      date: "May 23",
      type:"Primary"

    },
    {
      email: "reminder@example.com",
      subject: "Reminder",
      content: "Friendly reminder: our weekly team meeting is tomorrow. Don't forget to prepare your updates.",
      senderName: "Admin",
      date: "May 23",
      type:"Promotion"
    },
    {
      email: "feedback@example.com",
      subject: "Feedback Request",
      content: "We value your feedback! Let us know how we're doing by completing our short survey.",
      senderName: "Feedback Team",
      date: "May 23",
      type:"Social"

    },
    {
      email: "marketing@example.com",
      subject: "Special Offer",
      content: "Exclusive offer: 20% off on selected products. Limited time only!",
      senderName: "Marketing Department",
      date: "May 23",
      type:"Primary"

    },
    {
      email: "support@example.com",
      subject: "Technical Support",
      content: "Our technical team is here to assist you. How can we help? Please provide details of the issue you're facing.",
      senderName: "Tech Support",
      date: "May 23",
      type:"Promotion",

    },
    {
      email: "survey@example.com",
      subject: "Customer Survey",
      content: "Please take a moment to complete our customer satisfaction survey. Your input matters!",
      senderName: "Customer Experience",
      date: "May 23",
      type:"Primary"

    },
    {
      email: "welcome@example.com",
      subject: "Welcome Aboard",
      content: "Welcome to our community! Here's what you need to know as a new member.",
      senderName: "Community Manager",
      date: "May 23",
      type:"Social"
    },
    {
      email: "invoice@example.com",
      subject: "Invoice",
      content: "Attached is your invoice for the recent purchase. Payment is due by the end of the month.",
      senderName: "Billing Department",
      date: "May 23",
      type:"Primary"
    }]
  
  
  return (
    <div className="email-container">
      <Nav appearance="subtle" activeKey={active} onSelect={setActive} style={{  border: "black" }}>
      <Nav.Item eventKey="All">All</Nav.Item>

      <Nav.Item eventKey="Primary">  <EmailIcon  style={{marginRight:"10px"}}/>Primary</Nav.Item>
      <Nav.Item eventKey="Promotion"> <TagIcon  style={{marginRight:"10px"}}/>Promotion</Nav.Item>
      <Nav.Item eventKey="Social"> < PeoplesIcon style={{marginRight:"10px"}}/> Social</Nav.Item>
    
    </Nav>
      {
        email.map((e,i)=>{
          if(active=="All")return <EmailTabs data={e} key={i}/>

          if(e.type==active)return <EmailTabs data={e} key={i}/>
        })
        
      }
      {
            email.map((e,i)=>{
              if(active=="All")return <EmailTabs data={e} key={i}/>

              if(e.type==active) return <EmailTabs data={e} key={i+"r"}/>
        })
      }
      
    </div>
  );
}
