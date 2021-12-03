import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import {TicketTabel} from '../../Components/Ticket-tabel/TicketTabel-comp'
import tickets from '../../assets/data/dummy-tickets.json'
import { PageBreadcrumb } from '../../Components/breadcumb/Breadcrumb.comp'
export const Dashboard = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                    <PageBreadcrumb page="Dashboard"/>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center mt-5 mb-2">
                    <Button  variant="info" style={{fontSize:'2rem',padding: '10px 30px'}}>Add New Ticket</Button>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center  mb-2">
                    <div>Total Tickets {tickets.length}</div>
                    <div>Pendin Tickets: 5</div>
                    </Col>
                </Row>
                <Row>
                    <Col className="mb-2">
                    Recently Added Tickets
                    </Col>
                </Row>
                <Row>
                    <Col className="recent-ticket">
                   <TicketTabel tickets={tickets}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
