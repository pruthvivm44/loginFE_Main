import React from 'react';
import {useState} from 'react';
import {Container,Row,Tab,Tabs,Col,Form,Button,Alert} from 'react-bootstrap';
import labels from '../src/config/labels';
import {auth} from '../src/config/firebase-config';
import {createUserWithEmailAndPassword} from 'firebase/auth';

function Login(){
    const [signupEmail,setSignupEmail]=useState("");
    const [signupPassword,setSignupPassword]=useState("");
    const [error,setError]=useState("")
    
    const signup= async (e)=>{
    e.preventDefault();
        setError("");
        try{
            const user = await createUserWithEmailAndPassword(
            auth,
            signupEmail,
            signupPassword );
            console.log(JSON.stringify(user))
            alert('User is Verified')
        }
        catch(error){
            console.log(error.message);
            setError(error.message);
        }
    }

    return(
        <>
        <Container>
            <Row>
                <Col md={12}>
                    <Tabs defaultActiveKey="first" id="uncontrolled-tab-example">
                            <Tab style={{color:'black'}} eventKey="first" title="Login"/>
                            <Tab style={{color:'black'}} eventKey="second" title="Register"/>
                    </Tabs>
                </Col><p></p><p></p>

                <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email Id" size='lg'  
                            onChange={(event)=>{setSignupEmail(event.target.value)}} 
                            />
                        </Form.Group>
                        {error && <Alert varient="danger">{error}</Alert>}
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" size='lg' onChange={(event)=>{setSignupPassword(event.target.value)}} />
                        </Form.Group>  
                        <p></p>
                        <Button variant="success" type="submit" size='lg' onClick={signup}>
                                {labels.LOGINSIGNUP.AFTER_FILLED_ALL_DETAILS}
                        </Button>
                        <p></p>
                        <span><br></br><br></br></span>
                        <div style={{textAlign:'center',color:'grey'}}>
                        <Form.Label><h4>{labels.LOGINSIGNUP.DIVIDER_OR}</h4></Form.Label>
                        </div>
                        <p></p>
                        <p></p>
                        <span><br></br></span>
                        <div className="d-grid gap-2">
                        <Button variant="outline-success" type="submit" size='lg'>
                                {labels.LOGINSIGNUP.LOGIN_THROUGH_OTP}
                        </Button>
                        </div>
                        <span><br></br></span>
                        <div className='center' style={{color:'grey darken-2',textAlign:'center'}}>
                            <h5 className='center'>
                                {labels.LOGINSIGNUP.DONT_HAVE_ACCNT}<a href='/' style={{color:"#0277bd"}}> {labels.LOGINSIGNUP.CREATE_NEW_ACCOUNT}</a>
                            </h5>
                        </div>
                </Form>
        </Row>
    </Container>
    </>
    )
}
export default Login;