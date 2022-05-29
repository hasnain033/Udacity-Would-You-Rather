import React, { Component } from 'react'
import { Button, Card, Image } from 'react-bootstrap'
import {FormLabel, FormControl} from '@mui/material'
class Register extends Component {
  state = {
    username: '',
    name: '',
    avatarURL:''
  }

  handleOnChange = (e) => {
    const { id, value } = e.target
    this.setState({ [id]: value })
  }

  register = (e) => {
    e.preventDefault()
    const { username, name, avatarURL } = this.state
    const { handleRegisteration, setAuthedUser } = this.props
    handleRegisteration({
      username: username,
      name: name,
      avatarURL: avatarURL,
    })
    setAuthedUser(username)
  }

  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
        let img = event.target.files[0];
        this.setState({
            avatarURL: URL.createObjectURL(img)
        });
      }
  }
  render() {
    const { username, name, avatarURL } = this.state
    const { users } = this.props
    return (
        <Card variant="outlined" className="mb-3">
            <Card.Body>
                <FormControl className='col'>
                <FormLabel>Register</FormLabel>
                <div className='row'>
                <div className='col-6'>
                    <label htmlFor="username">User Name</label>
                    <input type="text" id="username" className="form-control form-control-md"
                           value={username} onChange={(event) => this.handleOnChange(event)} />
                           <div className="form-group">
                               <label htmlFor="name">Name</label>
                               <input type="text" id="name" className="form-control form-control-md"
                                      value={name} onChange={(event) => this.handleOnChange(event)} />
                            </div>
                    </div>
                    
                    <div className='row col-6 upload-img p-4'>
                        <div className='col-auto'>
                            <Image src={avatarURL} style={{maxWidth: '100px',borderRadius: '50px'}}/>
                        </div>
                        <div className='col'>
                        <input type="file" name="profilePhoto" onChange={this.onImageChange} />
                        </div>
                    </div>
                </div>
                    
                    <Button type="submit" disabled={!avatarURL || !username || !name 
                    || users.find(u => u.id === username)} onClick={this.register}>
                            Register
                    </Button>
            </FormControl>
           
        </Card.Body>
    </Card>
    )
  }
}

export default Register



