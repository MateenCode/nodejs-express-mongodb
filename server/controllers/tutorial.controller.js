const db = require("../models")
// grabs the tutorial model from index where everything is brought together
const Tutorial = db.tutorials

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if(!req.body.title){
        res.status(400).send({ message: "Title can not be empty!"})
        return;
    }
    // Create a Tutorial
    const tutorial = new Tutorial({
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    })
    // Save Tutorial in the database
    tutorial
    // Save the data
        .save(tutorial)
        // Send the data to see what we created
        .then((data) => {
            res.send(data)
        })
        // Catches any errors
        .catch((err) => {
            res.status(500).send({
                message: 
                    err.message || "Some error occured while creating the Tutorial."
            });
        });
};

// Retrieve all the Tutorials from the database
exports.findAll = (req, res) => {
//Find all the Tutorials in the database
Tutorial.find()
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.status(500).send({
            message:
            err.message || "Some error occured while retrieving tutorials."
        })
    })

}

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    // Find Tutorial by the id being passed by id
    Tutorial.findById(id).then((data) => {
            if(!data){
                res.status(400).send({message: "Not found Tutorial with id" + id});
            }else{
                res.send(data)
            }
    });
};

// Updates a single Tutorial
exports.update = (req,res) => {

}

// Deletes a single tutorial
exports.delete = (req, res) => {

}

// Retrieve all published Tutorials
exports.findAllPublished = (req,res) => {
    
}



