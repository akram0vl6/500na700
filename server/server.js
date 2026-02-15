require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDB = require('./config/database')
const newsRoutes = require('./router/news')

const app = express()
const PORT = process.env.PORT || 3001


connectDB()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.use('/api/news', newsRoutes)


app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    database: 'connected'
  })
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ 
    success: false,
    error: 'Что-то пошло не так!' 
  })
})

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`)
})


process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully...')
  server.close(() => {
    console.log('Process terminated')
    process.exit(0)
  })
})