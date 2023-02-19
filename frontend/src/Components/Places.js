import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

import PlaceCard from './PlaceCard';

const Places = ({ setLink, data }) => {
  let places

  try{
    places = data.map(place => {
      const { _id } = place
      return (
        <Col className='m-2 d-flex flex-wrap flex-row p-2' key={_id} sm={5}>
          <Button className=' p-2 shadow rounded' href={`/places/${_id}`}>
            <PlaceCard place={place} />
          </Button>
        </Col>
      )
    })
  } catch (error) {
    setLink('')
  }

  return (
    <Container>
      <Row className='bg-white p-2 shadow rounded'>
        {data ? places : null}
      </Row>
    </Container>
  )
}

export default Places