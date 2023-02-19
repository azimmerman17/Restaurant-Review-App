const router = require('express').Router()

//connection to models
const Places = require('../models/places')
const Comments = require('../models/comment')


// GET
// Get All Places
router.get('/', async (req,res) => {
  let places = await Places.find()
  try {
    res.status(200).send(places)
  } catch (error) {
    console.log(error)
    res.redirect(`http://localhost:3000/places/Error404`)
  }

})

// Get - create a new place  ??? Do I need ??? - Delete Later
router.get('/new', (req,res) => {
  res.render('places/new')
})

// Get Place by ID
router.get('/:id', async (req,res) => {
  const { id } = req.params
  let place = await Places.findById(id)
  .populate('comments')
  try {
      res.status(200).send(place)
  } catch (error) {
    console.log(error)
    // res.redirect(`http://localhost:3000/places/Error404`)
  }
})

//Get Edit Restaurent
router.get('/:id/edit', async (req, res) => {
  const { id } = req.params
  let place = await Places.findById(id)
  try {
    res.status(200).send(place)
  } catch (error) {
    console.log(error)
    res.redirect(`http://localhost:3000/places/Error404`)
  }
})

// POST
// Create new place Good!
router.post('/', (req,res) => {
  const { pic, city, state } = req.body
  // not required pic, city, state
  if (!pic) req.body.pic = undefined
  if (!state) req.body.state = undefined
  if (!city) req.body.city = undefined

  try {
    Places.create(req.body)
    res.redirect(`http://localhost:3000/places`)
  } catch (error) {
    console.log(error)
    res.redirect(`http://localhost:3000/places/Error404`)
  }
})

// Create new comment
router.post('/:id/comment', async (req, res)=> {
  const { id } = req.params
  const { author, rant, content } = req.body
  console.log(req.body)
  // not required author, content
  if (!author) req.body.author = undefined
  if (!content) req.body.content = undefined
  if (rant === 'on') {
    req.body.rant = true
  } else {
    req.body.rant = false
  }  
  try {
    let place = await Places.findById(id)
    Comments.create(req.body)
    .then((comment) => {
      place.comments.push(comment.id)
      place.save()
      .then(() => {
        res.redirect(`http://localhost:3000/places/${id}`)
      })
    })
  } catch (error) {
    console.log(error)
    res.redirect(`http://localhost:3000/places/Error404`)
  }
})

// PUT
// Modify a place  Good
router.put('/:id', async (req, res) => {
  const { id } = req.params
  const { pic, city, state } = req.body
    if (!pic) req.body.pic = undefined
    if (!city) req.body.city = undefined
    if (!state) req.body.state = undefined

    await Places.findByIdAndUpdate(id, req.body)
    .then(() => {
      res.redirect(`http://localhost:3000/places/${id}`)
    })
  .catch((error) => {
    console.log(error)
    res.redirect(`http://localhost:3000/places/Error404`)
  })
})



// DELETE 
// Delete place  Good
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  await Places.findByIdAndDelete(id)
  .then(() => {
    res.status(303).redirect('http://localhost:3000/places')
  })
  .catch((error) => {
    console.log(error)
    res.redirect(`http://localhost:3000/places/Error404`)
  })
})

// delete comment
router.delete('/:placeId/comment/:id', async (req, res) => {
  const { placeId, id } = req.params
  await Comments.findByIdAndDelete(id)
  .then(() => {
    res.status(303).redirect(`http://localhost:3000/places/${placeId}`)
  })
  .catch((error) => {
    console.log('error', error)
    res.redirect(`http://localhost:3000/places/Error404`)
  })
})

module.exports = router