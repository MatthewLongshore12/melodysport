import styled from '@emotion/styled';
import { DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material';
import { Avatar, Button, ButtonGroup, Fab, Modal, IconButton, TextField, Tooltip, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useState, useEffect } from 'react'



const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#1c1c1c",
  padding: "40px",
  borderRadius: "5px",
  boxShadow: "0px 0px 10px 5px #88d4c3",
})

const StyledHeader = styled(Typography)({
  color: "#88d4c3",
  fontSize: "32px",
  fontWeight: "bold",
  marginBottom: "40px",
})

const StyledTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#88d4c3",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#88d4c3",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#ffffff",
    },
    "&:hover fieldset": {
      borderColor: "#88d4c3",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#88d4c3",
    },
  },
})

const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#88d4c3',
  color: '#121212',
  '&:hover': {
    backgroundColor: '#88d4c3',
    color: '#fff'
  },
}));


function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [reqs, setReqs] = useState([])




  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      name,
      email,
      message,
    }
    fetch("http://127.0.0.1:5555/requests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setReqs([...reqs, data]);
      })
      .catch((error) => console.error(error));
  };


  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", minHeight: "100vh", backgroundColor: "#141414" }}>
      <header className='toppage'>
      </header>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "50px 0" }}>
        <StyledBox>
          <StyledHeader>Create Message</StyledHeader>
          <form onSubmit={handleSubmit} style={{width: "100%"}}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px", mb: 3 }}>
              <Typography fontWeight={500} variant="span" sx={{color: "#ffffff"}}>
              </Typography>
            </Box>
            <StyledTextField
              sx={{ width: "100%", mb: 2 }}
              inputProps={{ style: { color: "#ffffff" } }}
              id="name"
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <StyledTextField
              sx={{ width: "100%", mb: 2 }}
              inputProps={{ style: { color: "#ffffff" } }}
              multiline
              id="email"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <StyledTextField
              sx={{ width: "100%", mb: 2 }}
              inputProps={{ style: { color: "#ffffff" } }}
              multiline
              id="message"
              label="Message"
              variant="outlined"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <SubmitButton type="submit">Create</SubmitButton>
          </form>
        </StyledBox>
      </Box>
      <footer className='buttpage'>
      </footer>
    </Box>
  )
}

export default ContactPage