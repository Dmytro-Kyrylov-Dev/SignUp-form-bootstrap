import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import logo from "../images/logo.png";
import male from "../images/male.png";
import female from "../images/female.png";
import other from "../images/other.png";

function SignUpForm() {
  const [password, setPassword] = useState();

    return (
        <div className="sign-up-form">
            <Form onSubmit={() => alert("no errors, submit is done!")}>
                <img className="logo-img" src={logo} alt="logo" />
                <h2 className="sign-up-title">Sign Up with email</h2>
                <div className="gender-check">
                    <h5 className="form-title regular-text">Gender</h5>
                    <div className="checkbox">
                    <label>
                        <div className="checkbox-btn">
                        <img src={male} alt="male" />
                        <p>Male</p>
                        <input type="radio" label="first radio" name="formHorizontalRadios" id="thisIsMale" required />
                        </div>
                    </label>
                    <label> 
                        <div className="checkbox-btn">
                        <img src={female} alt="female" />
                        <p>Female</p>
                        <input type="radio" label="second radio" name="formHorizontalRadios" id="thisIsFemale" />
                        </div>
                    </label>
                    <label>
                        <div className="checkbox-btn">
                        <img src={other} alt="other" />
                        <p>Other</p>
                        <input type="radio" label="third radio" name="formHorizontalRadios" id="thisIsOther" />
                        </div>
                    </label>
                    </div>
                </div>
                <div>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label className="form-title regular-text">E-mail</Form.Label>
                        <Form.Control type="email" required placeholder="Enter email" className="form-box"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label className="form-title regular-text">Create Password</Form.Label>
                        <Form.Control type="password" name="password" required minLength={6} placeholder="Password" className="form-box" onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupConfirmPassword" >
                        <Form.Label className="form-title regular-text">Confirm Password</Form.Label>
                        <Form.Control type="password" name="confirm" required pattern={password} placeholder="Password" className="form-box" />
                    </Form.Group>
                    <Button className="submit-btn regular-text" variant="primary" type="submit">Sign Up</Button>
                </div>
                <p className="regular-text alredy">Already have an account? <Link to="/">Log In</Link></p>
                <p className="regular-text privacy">Review privacy and disclosures <Link to="/">here</Link></p>
            </Form>
        </div>
    )
}

export default SignUpForm;