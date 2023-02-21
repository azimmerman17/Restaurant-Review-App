import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"
import Stack from "react-bootstrap/esm/Stack"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { BsTrash } from 'react-icons/bs'
import { useParams } from "react-router-dom"
import FormGroup from "react-bootstrap/esm/FormGroup";


const AddComments = ({ id }) => {
  return (
    <Stack gap={2}>
      <h3 className='mb-2'>Add comments</h3>
      <Form method='POST' action={`http://localhost:8080/places/${id}/comment`} className='border bg-white p-3 shadow rounded'>
        <Stack gap={2}>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label htmlFor='content' className='text-left'>Comments</Form.Label>
                  <Form.Control 
                    id='content' 
                    name='content' 
                    type='text'/>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <Form.Group>
                <Form.Label htmlFor='author'>Author</Form.Label>
                  <Form.Control 
                    id='author' 
                    name='author' 
                    type='text'/>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <Form.Group>
                <Form.Label htmlFor='stars'>Star Rating</Form.Label>
                  <Form.Control 
                    id='stars' 
                    name='stars' 
                    type='range'
                    max={5}
                    step={0.5}
                    required/>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
            <Form.Group>
              <Form.Label htmlFor='rant'>Rant?</Form.Label>
              <Form.Check type="checkbox" name='rant' id="rant" />
            </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <Form.Control 
                className='btn btn-primary' 
                type='submit' 
                value='Submit'/>
            </Col>
          </Row>
        </Stack>
      </Form>
    </Stack>
  )
}

export default AddComments
