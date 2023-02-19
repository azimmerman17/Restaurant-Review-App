import { useParams } from "react-router-dom"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import Stack from "react-bootstrap/esm/Stack"
import Form from "react-bootstrap/esm/Form"
import { BsTrash } from 'react-icons/bs'
import { FaEdit } from 'react-icons/fa'

import AddComments from "./AddComments"
import Button from "react-bootstrap/esm/Button"

const ShowPlace = ({ setLink, data }) => {
  const { id } = useParams()
  let stars = 'No Ratings'
  let commentsArea
  const { city, comments, cuisines, founded, name, pic, state, _id } = data

  try {
    if (comments.length > 0) {
      let sumRatings = comments.reduce((total, c) => {
          return total + c.stars
      }, 0)
      let averageRating = Math.round(sumRatings / comments.length)
      stars = ''
      for (let i = 0; i < averageRating; i++) {
          stars += '⭐️'
      }
      stars += ' Stars'
    }  

    commentsArea = comments.map(c => {
      const { rant, content, author, stars, _id } = c
      return (  
            <Col className='border bg-white m-2 p-3 shadow rounded' sm={5} key={_id}>
                <h6>{rant ? 'Rant 😡' : 'Rave 😀'}</h6>
                <h6>{content}</h6>
                <h6>
                    <strong>- {author}</strong>
                </h6>
                <h6 >Rating: {stars}</h6>
                <form method='POST' action={`http://localhost:8080/places/${id}/comment/${c._id}?_method=DELETE`}>
                    <button className='btn btn-danger bi bi-trash' type='submit'><BsTrash /></button>
                </form>
            </Col>
      )
    })
    
  } catch (error) {
    setLink(`/${id}`)
  }

  return (
    <Container>
      <Row className='border bg-white m-1 p-1 shadow rounded'>
        <Col>
          <img className='shadow rounded' src={pic} alt={name} />
        </Col>
        <Col>
        <Stack gap={4}>
          <Row className="mt-3">
            <h2 className='text-center'>{name}</h2>
          </Row>
          <Row> 
            <h4 className='text-center'>Ratings</h4>
            <p className='text-center'>{stars}</p>
          </Row>
          <Row>
            <h4 className='text-center'>Description</h4>
            <h5 className='text-center'>
              {name} has been serving {cuisines} in {city}, {state} since {founded}.
            </h5>
          </Row>
          <Row>
            <Col xs={8}>
            </Col>
            <Col xs={1}>
      
              <Button href={`${id}/edit`} className='btn btn-warning'><FaEdit /></Button>
            </Col>
            <Col xs={1}>
              <Form method='POST' action={`http://localhost:8080/places/${id}?_method=DELETE`}>
                <Button type='submit' className='btn btn-danger'><BsTrash /></Button>
              </Form>
            </Col>
          </Row>
        </Stack>
        </Col>
      </Row>
      <hr/>
      <Row>
        <h4 className='mb-2'>Comments</h4>
        <Row >
          {comments ? commentsArea : <p>No Comments</p>}
        </Row>
      </Row>
      <hr />
      <AddComments id={id}/>
    </Container>
  )
}

export default ShowPlace