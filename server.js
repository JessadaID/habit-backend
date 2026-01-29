const express = require('express')
const app = express()
const port = 3001
const router = express.Router()
const habits_route = require('./route/habits_route')
const users_route = require('./route/users_route')

app.use(express.json())
app.use(router)

router.get('/', (req, res) => {
  res.json({
    message: 'Hello World!',
    version: '1.0.0',
    author: 'Jessada',
    date: new Date().toISOString()
  })
})

router.use('/habits', habits_route)
router.use('/users', users_route)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
