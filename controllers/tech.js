const asyncHandler = require('../middleware/async');
const Tech = require('../models/Tech')

//@desc add a tech
//route POST /tech
//@access private
exports.addTech = asyncHandler(async (req, res, next) => {

    const {firstName, lastName} = req.body;
    const tech = await Tech.create({
        firstName, lastName
    })
    res.send(tech)
})
//@desc get all tech
//route GET
//@access public
exports.getTech = asyncHandler(async (req, res, next) => {
    try {
        const techs = await Tech.find({})
        res.send(techs)
    } catch (err) {
        res.status(500).send('server error')

    }
})

//@desc add a tech
//route POST /tech/:id
//@access private
exports.removeTech = asyncHandler(async (req, res, next) => {
    try {
        const tech = await Tech.findById(req.params.id);

        if (!tech) {
            res.status(404).send('error')
        }
        tech.remove();
        res.status(200).send({})
    } catch (e) {
        res.status(401).send('Error')

    }
})
//@desc update a tech
//route POST /tech/:id
//@access private
exports.updateTech = asyncHandler(async (req, res, next) => {
    try {
        let tech = await Tech.findById(req.params.id);
        if (!tech) {
            res.status(404).send('error')
        }
        tech = await Tech.findOneAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).send(tech)
    }catch (e) {
        res.status(401).send('Error')

    }
})