import React, {useEffect, useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AddTicketForm } from '../../Components/add-ticket-form/AddTicketForm.comp'
import { PageBreadcrumb } from '../../Components/breadcumb/Breadcrumb.comp'
const initialFrmDta = {
    subject: "",
    issueDate: "",
    detail: "",
}
export const AddTicket = () => {
    const  handleOnSubmit = e => {
        e.preventDefault()
        console.log(`Form Sumbit Information Recived ${e.target}`)
    }
    const [frmData, setFrmData] = useState(initialFrmDta)
    useEffect(() => {}, [frmData])
    const handleOnChange = (e) =>{
        const {name, value} = e.target;
       
        setFrmData({
            ...frmData,
            [name]: value
        })
        
    };

    return (
        <Container>
        <Row>
           <Col>
           <PageBreadcrumb page="New Ticket"/>
           </Col> 
        </Row>   
        <Row>
        <Col>
        <AddTicketForm handleOnChange={handleOnChange} 
        frmDt={frmData} 
        handleOnSubmit={handleOnSubmit}
        ></AddTicketForm>
        </Col>    
        </Row> 
        </Container>

            
    )
}
