import React from 'react'
import { Form,Button,Row,Col } from 'react-bootstrap'
import PropTypes from 'prop-types'

export const AddTicketForm = ({handleOnSubmit,handleOnChange,frmDt }) => {
console.log(frmDt)
    return (
        <div>
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
						<Form.Group as={Row}
                        > 
							<Form.Label column sm={3}>Subject</Form.Label>
							<Col sm={9}>
                            <Form.Control
							
								name="subject"
								value={frmDt.subject}
								onChange={handleOnChange}
								placeholder="Subject"
								required
							/>
                            </Col>
						</Form.Group> 
						<Form.Group as={Row}>
							<Form.Label column sm={3}>Date</Form.Label>
							<Col sm={9}>
                            <Form.Control
								type="date"
								name="issueDate"
								onChange={handleOnChange}
								value={frmDt.date}
                                
								required
                                />
                            </Col>
						</Form.Group>
                        <Form.Group >
							<Form.Label >Issue Found</Form.Label>
							
                            
                            <Form.Control
                            as="textarea"
                            value={frmDt.detail}
                            name="detail"
                            rows="5"
                            onChange={handleOnChange}
                            // value={password}
							
                            required
							/>
                            
						</Form.Group>

						<Button type="submit" variant="info" block="true">Login</Button>
						
					</Form> 
        </div>
    )
}
AddTicketForm.propTypes = {
    handleOnSubmit: PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    frmDt: PropTypes.object.isRequired,
}