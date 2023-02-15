const router = require('express').Router()

//connection to models
const Restaurants = require('../models/restaurants')
const Comments = require('../models/comment')


// GET
// Get All Restaurants
router.get('/', async (req,res) => {
  let restaurants = await Restaurants.find()
  try {
    res.status(200).send(restaurants)
  } catch (error) {
    console.log(error)

  }

})

// Get - create a new place  ??? Do I need ??? - Delete Later
router.get('/new', (req,res) => {

})

// Get Restaurant by ID
router.get('/:id', async (req,res) => {
  const { id } = req.params
  let restaurant = await Restaurants.findById(id)
  .populate('comments')
  try {
      res.status(200).send(restaurant)
  } catch (error) {
    console.log(error)
  }
})

//Get Edit Restaurent
router.get(':id/edit', async (req, res) => {
  const { id } = req.params
  let restaurant = await Restaurants.findById(id)
  try {
    res.status(200).send(restaurant)
  } catch (error) {
    console.log(error)
  }
})

// POST
// Create new restaurant
router.post('/', (req,res) => {
  const { pic, city, state } = req.body
  // not required pic, city, state
  if (!pic) pic = undefined
  if (!state) state = undefined
  if (!city) city = undefined

  try {
    Places.create(req.body)
    res.redirect('/')
  } catch (error) {
    console.log(error)
  }
})

// Create new comment
router.post(':id/comment', async (req, res)=> {
  const { id } = req.params
  const { author, rant, content } = req.body
  // not required author, content
  if (!author) author = undefined
  if (!content) content = undefined
  rant === 'on' ? rant = true : rant = false
  let restaurant = await Restaurants.findByID(id)
  .then(restaurant => {
    restaurant.comments.push(comment.id)
    restaurant.save()
    .then(() => {
      res.redirect(`/places/${id}`)
    })
  })
.catch(error => {
  console.log(error)
})

})

// PUT
// Modify a place
router.put('/:id', async (req, res) => {
  const { id } = req.params
  const { pic, city, state } = req.body
    if (!pic) req.body.pic = undefined
    if (!city) req.body.city = undefined
    if (!state) req.body.state = undefined

    await Places.findByIdAndUpdate(id, req.body)
    .then(() => {
      res.redirect(`/places/${id}`)
    })
  .catch((error) => {
    console.log('error', error)
  })
})



// DELETE 
// Delete restaurant
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  await Places.findByIdAndDelete(id)
  .then(() => {
    res.status(303).redirect('/places')
  })
  .catch((error) => {
    console.log('error', error)
  })
})

// delete comment
router.delete('/:placeId/comment/:id', async (req, res) => {
  const { placeId, id } = req.params
  await Comments.findByIdAndDelete(id)
  .then(() => {
    res.status(303).redirect(`/places/${placeId}`)
  })
  .catch((error) => {
    console.log('error', error)
  })
})
