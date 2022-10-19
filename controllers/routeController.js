//start our router
//import express
const express= require('express')
//Only the router non of the other app stuff
const router = express.Router()
const dataController = require('./dataController')
const viewController = require('./viewController')

//Route
//Index
router.get('/',dataController.index, viewController.index)
//New
router.get('/new',viewController.newView)
//Delete
router.delete('/:id', dataController.destroy, viewController.redirectHome)
//update
router.put('/:id', dataController.update , viewController.show)
//Create
router.post('/', dataController.create , viewController.redirectShow)
//Edit
router.get('/:id/edit', dataController.show , viewController.edit)
//Show
router.get('/:id', dataController.show , viewController.show)

module.exports = router