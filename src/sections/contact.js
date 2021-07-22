import React, { useState } from 'react'
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button, Card } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Community from 'assets/blog/1.jpg'
import { Flex } from '@theme-ui/components';

export default function Contact() {
    const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [message, setMessage] = useState('')
const [submitted, setSubmitted] = useState(false)
const handleSubmit = (e) => { 
    e.preventDefault()
    console.log('Sending')
  let data = {
      name,
      email,
      message
    }
  fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setSubmitted(true)
        setName('')
        setEmail('')
        setBody('')
      }
    })
  }
    return (
        <section>
          
             <Container css={{textAlign:'center', marginTop:'15px'}}>
        <SectionHeader 
        slogan="Contact us"
        title="Connect with us and get started"/>
        
        
        <Box className="contact" id="contact" sx={styles.wrapper}>
        
        <Box className="right" sx={styles.form}>
        
         
       < Card as="form" className="carousel-container" sx={styles.card} >
  < formGroup sx={styles.form.title} >
   
    < Text as="input" type='text' name='name' placeholder='Enter your name' onChange={(e)=>{setName(e.target.value)}}  sx={styles.form.subTitle} required />  
  </formGroup>
  < formGroup sx={styles.form.title} >
    
    < Text as="input" type='text' name='email' placeholder='Enter your email' required onChange={(e)=>{setEmail(e.target.value)}}  sx={styles.form.subTitle} />  
  </formGroup>
  < formGroup sx={styles.form.title} >
  
    < Text as="textarea" type='text' name='message'placeholder='Enter your message' required onChange={(e)=>{setMessage(e.target.value)}}  sx={styles.form.message} />  
  </formGroup>
  
 
      
  <Button sx={styles.buttonGroup} onClick={(e)=>{handleSubmit(e)}}  title="Contact">Contact</Button>
  </Card >
        </Box>
      </Box>
       
      </Container>
        </section>
    )
}


const styles = {
    card: {
      display: 'flex',
      alignItems: 'center',
     
      borderRadius: 20,
      transition: 'all 0.3s',
      p: ['35px 25px', null, null, '40px'],
      border: '1px solid rgba(38, 78, 118, 0.1)',
      mb: '40px',
      mt: '40px',
      flexDirection:'column',
      mx: [0, 'auto', 0],
      '&:before': {
        position: 'absolute',
        content: "''",
        
        top: 0,
        left: 0,
       
        border: '1px solid rgba(38, 78, 118, 0.1)',
        borderRadius: 'inherit',
        transition: 'all 0.3s',
        zIndex: -1,
      },
      '&:hover': {
        boxShadow: '0px 4px 25px rgba(38, 78, 118, 0.1) !important',
        '&:before': {
          opacity: 0,
        },
      },
      
    },
    
    pricingBox: {
      borderRadius: 20,
      position: 'relative',
      transition: 'all 0.3s',
      p: ['35px 25px', null, null, '40px'],
      width: ['100%', '75%', '100%'],
      mb: '40px',
      mt: '40px',
      mx: [0, 'auto', 0],
      '&:before': {
        position: 'absolute',
        content: "''",
        width: '100%',
        top: 0,
        left: 0,
        height: '100%',
        border: '1px solid rgba(38, 78, 118, 0.1)',
        borderRadius: 'inherit',
        transition: 'all 0.3s',
        zIndex: -1,
      },
      '&:hover': {
        boxShadow: '0px 4px 25px rgba(38, 78, 118, 0.1) !important',
        '&:before': {
          opacity: 0,
        },
      },
    },
    form:{
     display:'flex',
     alignItems:'center',
     flexDirection:'column',
     width:'100%',
     mt:'5px',
     
     title: {
      fontSize: [2, 3],
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      width:'100%',

      mb: ['10px', null, '15px'],
      
    },
     message: {
      fontSize: [1, '15px'],
      fontWeight: 400,
      height:'80px',
      textDecoration:'none',
      width:'100%',
      lineHeight: '1.9',
      mt:'15px',
      ml:'5px'
     },
    subTitle: {
      fontSize: [1, '15px'],
      fontWeight: 400,
      lineHeight: '1.9',
      mt:'15px',
      mx: [0, 'auto', 0],
      width:'100%',
      ml:'5px',
     
    },
    },
   
    buttonGroup: {
        justifyContent: 'center',
        mb: '7',
        mt: ['15px', '35px'],
        position: 'relative',
        zIndex: 2,
      },
    img: {
      width: ['70px', null, null, '80px', '90px', 'auto'],
      height: 'auto',
      flexShrink: 0,
      mr: [2, 3, null, null, 4, 5],
      ml: -2,
    },
    
    wrapper: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems:'center',
      mt: '-5px',
    
    },
    inputGroup: {
        height: 'auto',
        width: '100%',
        display: 'flex',
        justifyContent:'center',
        flexDirection: 'column',
        mr: [10, 0]
      },
    inputLabel: {
        textAlign: 'left'
      },
      inputField: {
        height: '30',
      },
  };
  