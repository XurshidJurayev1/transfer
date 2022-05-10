import React, {useState} from 'react';
import './Form.scss'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Button, ButtonGroup  } from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = (e) => {
    e.preventDefault()

    console.log(email)
    console.log(password)
  }


  return (
    <Container maxWidth='xl' sx={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh'
    }}>
    <Box 
      component="form"
      onSubmit={submit}
      noValidate 
      sx={{p: '25px', backgroundColor: '#e8e8e8', borderRadius: '15px',  width: '80%' }}
      >
      <Typography >
        <Box sx={{ fontSize: 'h3.fontSize', m: 1 }}>Login</Box>
      </Typography>
        <Box
          sx={{
            '& .MuiTextField-root': { m: 1, width: '100%', display: 'flex', flexDirection: 'column'},
          }}
        >
          <TextField
            id="outlined-multiline"
            label="Email"
            placeholder="Please write your email"
          
            multiline
            value={email}
            onChange={(e) =>setEmail(e.target.value)}
          />      
          <TextField
            id="outlined-multiline"
            label="Password"
            placeholder="Write your password"
          
            multiline
            value={password}
            onChange={(e) =>setPassword(e.target.value)}
          />
        
        </Box>
          <Box sx={{
            display : 'flex', flex: 'wrap', width: '97%', m: 'auto', justifyContent: 'space-between', mt: '15px'
          }}>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
              <Button type='submit'>Register</Button>
            </ButtonGroup>
            <Link to='/register'>
              Do you don't have account?
            </Link>
          </Box>
     

      </Box>
    </Container>
  );
}

export default Login

