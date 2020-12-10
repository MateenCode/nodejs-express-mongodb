module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js")
    let router = require("express").Router();
 
    // Create a new Tutorial
    router.post("/", tutorials.create)
    // Retrieve all Tutorials
    router.get("/", tutorials.findAll);
    // // Retrieves a single Tutorial with id
    router.get("/:id", tutorials.findOne)
    // Update a Tutorial with id
    router.put("/:id", tutorials.update)
    // Delete a Tutorial
    router.delete("/:id", tutorials.delete)
    // Retrieve all published Tutorials
    router.get("/published", tutorials.findAllPublished)
    
    app.use('/api/tutorials', router)
}