const express = require("express")
const cutRouter = express.Router
const Cut = require("../models/haircut.js")

//get all cuts
cutRouter.get("/", (req, res, next) => {
    Cut.find((err, cuts) => {
        if(err){
            res.status(500)
            return next(err)
        }
        res.status(200).send(cuts)
    })
})
//post a cut
cutRouter.post("/", (req, res, next) => {
    const newCut = new Cut(req.body)
    newCut.save((err, savedCut) => {
        if(err){
            res.status(500)
            next(err)
        }
        res.status(201).send(savedCut)
    })
})
// delete cut
cutRouter.delete("/:cutId", (req, res, next) => {
    Cut.findOneAndDelete({ _id: req.params.cutId }, (err, deletedItem) => {
        if(err){
            res.status(500)
            next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedItem.firstName} from database`)
    })
})

module.exports = cutRouter