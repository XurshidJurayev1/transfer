import React, {useState} from 'react';
import './Form.scss'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Button, ButtonGroup  } from '@mui/material';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { Link } from 'react-router-dom';


import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';



const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState('');
  const [showPassword, setShowPassword] = useState('');



  const submit = (e) => {
    e.preventDefault()

    console.log(name)
    console.log(email)
    console.log(password)
    console.log(file)
  }




  return (
    <Container maxWidth='xl' sx={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh'
    }}>
    <Box 
      component="form"
      onSubmit={submit}
      noValidate
          autoComplete="on"    
      sx={{p: '25px', backgroundColor: '#e8e8e8', borderRadius: '15px',  width: '80%' }}
      >
      <Typography >
        <Box sx={{ fontSize: 'h3.fontSize', m: 1 }}>Registration</Box>
      </Typography>
        <Box
          sx={{
            '& .MuiTextField-root': { m: 1, width: '100%', display: 'flex', flexDirection: 'column'},
          }}
        >
          <Box sx={{
            display : 'flex', flex: 'wrap', 
          }}>
            <TextField
              id="outlined-multiline"
              label="Name"
              placeholder="Please write your name"
              sx={{width: "100%"}}
              multiline
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Email"
              placeholder="Please write your email"
              multiline
              value={email}
              onChange={(e) =>setEmail(e.target.value)}
            />
          </Box>
          <Box sx={{
            display : 'flex', flex: 'wrap', width: '98%', justifyContent: 'space-between', mt: '15px'
          }}>
            <Typography >
              <Box sx={{ fontSize: 'h6.fontSize', m: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Please choose your image</Box>
            </Typography>
            <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon size='50px' className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
          </Box>


          <Box sx={{
            display : 'flex', flex: 'wrap', mb: '15px'
          }}>
            <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                label="Password"
                placeholder="Please write your password"
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={()=> setShowPassword(!showPassword)}
                      onMouseDown={(e)=> e.preventDefault() }
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Box >

          <Box sx={{
            display : 'flex', flex: 'wrap', width: '97%', m: 'auto', justifyContent: 'space-between'
          }}>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
              <Button type='submit'>Register</Button>
            </ButtonGroup>
            <Link to='/login'>
             Do you have account?
            </Link>
          </Box>

          
                  
            
          
        </Box>
    </Box>
      
    </Container>
  );
}

export default Registration

