import React, {useEffect, useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AddTicketForm } from '../../Components/add-ticket-form/AddTicketForm.comp'
import { PageBreadcrumb } from '../../Components/breadcumb/Breadcrumb.comp'
import { shortText } from '../../util/validation'
const initialFrmDta = {
    subject: "",
    issueDate: "",
    detail: "",
}
const initialfrmErr = {
    subject: "",
    issueDate: "",
    detail: "",
}
export const AddTicket = () => {

    const [frmData, setFrmData] = useState(initialFrmDta)
    const [frmDataError, setfrmDataError] = useState(initialfrmErr)
    useEffect(() => {}, [frmData])
    const handleOnChange = (e) =>{
        const {name, value} = e.target;
       
        setFrmData({
            ...frmData,
            [name]: value
        })
        
    };
    const  handleOnSubmit = async(e) => {
        e.preventDefault();
        const isSubjectValid = await shortText(frmData.subject)
        const isValid = await shortText(frmData.subject)
        !isValid && setfrmDataError({
            ...initialfrmErr,
              subject: isSubjectValid
        })
        console.log(`Form Sumbit Information Recived ${frmData}`)
    }
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
        frmDataError={frmDataError} 
        handleOnSubmit={handleOnSubmit}
        ></AddTicketForm>
        </Col>    
        </Row> 
        </Container>

            
    )
}
