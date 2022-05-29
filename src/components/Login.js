import React from 'react'
import {Card } from 'react-bootstrap'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

const Login = (props) => {
  return (
    <Card variant="outlined" className="mb-3">
        <Card.Body>
            <FormControl>
                <FormLabel>Login with ...</FormLabel>
                <RadioGroup
                  aria-label="Login"
                  name="login"
                  value=""
                  onChange={(event) => props.setAuthedUser(event.target.value)}
                > 
                  {props.usersPayload &&
                    props.usersPayload.map((user) => (
                      <FormControlLabel
                        key={user.id}
                        value={user.id}
                        control={<Radio />}
                        label={user.name}
                      />
                    ))}
               </RadioGroup> 
            </FormControl>
        </Card.Body>
    </Card>
  )
}
export default Login
