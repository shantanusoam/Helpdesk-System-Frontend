import React from 'react'
import PropTypes from 'prop-types'
import {Container, Row, Col, Button, Form} from 'react-bootstrap'
export const LoginForm = ({handleOnChange,formSwitcher,handleOnSubmit, email ,password}) => {
    return (
        <Container>
            <Row>
                <Col>
                <h1 className="text-info text-center">Client Login</h1>
                <hr />
                <Form autoComplete="off" onSubmit={handleOnSubmit}>
						<Form.Group> 
							<Form.Label>Email Address</Form.Label>
							<Form.Control
								type="email"
								name="email"
								value={email}
								onChange={handleOnChange}
								placeholder="Enter Email"
								required
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								name="password"
								onChange={handleOnChange}
								value={password}
								placeholder="password"
								required
							/>
						</Form.Group>

						<Button type="submit">Login</Button>
						
					</Form> 
                <hr />
                </Col>
                
            </Row>
            <Row>
                <Col>
                    <a href="#!" onClick={()=>formSwitcher('reset')}>Forget Password?</a>
                </Col>
            </Row>
        </Container>
    )
}
LoginForm.propTypes = {
        handleOnSubmit: PropTypes.func.isRequired,
        handleOnChange: PropTypes.func.isRequired,
		formSwitcher: PropTypes.func.isRequired,
        email: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired
}