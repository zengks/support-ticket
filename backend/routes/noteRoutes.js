const express = require('express')
const router = express.Router({mergeParams: true})
const {getNotes, addNote} = require('../controllers/noteController')


const {protect} = require('../middleware/authMiddleware')

// Re-route into note router
router.route('/')
    .get(protect, getNotes)
    .post(protect, addNote)

module.exports = router

// /api/tickets/:ticketId/notes