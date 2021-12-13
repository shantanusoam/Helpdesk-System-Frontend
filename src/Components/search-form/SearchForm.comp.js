import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { filterSerachTicket } from "../../pages/ticket-list/ticketsAction";

import { Form, Row, Col } from "react-bootstrap";

export const SearchForm = ({handleOnChange,str}) => {
  const dispatch = useDispatch();

  // const handleOnChange = (e) => {
  //   const { value } = e.target;

  //   dispatch(filterSerachTicket(value));
  // };

  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm="3">
            Search:
          </Form.Label>
          <Col sm="9">
            <Form.Control
              name="searchStr"
              onChange={handleOnChange}
              value={str}
              placeholder="Search ..."
            />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};
SearchForm.prototype = {
  handleOnChange: PropTypes.func.isRequired,
  str: PropTypes.string.isRequired, 
}