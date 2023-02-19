import Card from 'react-bootstrap/Card'

const PlaceCard = ({ place }) => {
  const {name, pic, city, state, cuisines } = place
  console.log(place)
  return (
    <Card >
      <Card.Img variant="top" style={{width: '400px', height:'300px'}} src={pic}/>
      <Card.Body className='text-black'>
        <Card.Title >
          <h2>{name}</h2>
        </Card.Title>
        <Card.Text>
          {cuisines}
        </Card.Text>
        <Card.Text>
          {city}, {state}
        </Card.Text>
      </Card.Body>
    </Card>
  
  )
}

export default PlaceCard