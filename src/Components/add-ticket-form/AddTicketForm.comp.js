import React from 'react'
import { Form,Button,Row,Col } from 'react-bootstrap'
import PropTypes from 'prop-types'

import "./add-ticket-form-style.css"
export const AddTicketForm = ({handleOnSubmit,handleOnChange,frmDt }) => {
console.log(frmDt)
    return (
        <div className="mt-3 add-new-ticket bg-light">
			<h1 className="text-info text-center">Add New Ticket</h1>
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
						<Form.Group as={Row}
                        > 
							<Form.Label column sm={3}>Subject</Form.Label>
							<Col sm={9}>
                            <Form.Control
								minLength="3"
								maxLength="100"
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
	frmDataError: PropTypes.object.isRequired
}