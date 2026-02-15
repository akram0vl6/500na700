const mongoose = require('mongoose')

const newsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      maxlength: [200, 'Title cannot be more than 200 characters']
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true
    },
    content: {
      type: [String],
      required: [true, 'Content is required']
    },
    date: {
      type: String,
      required: [true, 'Date is required']
    },
    image: {
      type: String,
      default: 'img1.png'
    }
  },
  {
    timestamps: true // Добавляет createdAt и updatedAt
  }
)

// Indexes для оптимизации
newsSchema.index({ createdAt: -1 }) // Сортировка по дате создания
newsSchema.index({ title: 'text', description: 'text', content: 'text' }) // Поиск по тексту

const News = mongoose.model('News', newsSchema)

module.exports = News