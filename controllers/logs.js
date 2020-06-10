const asyncHandler = require('../middleware/async');
const Log = require('../models/Log')

//@desc get ALl logs
//route POST /logs
//@access private
exports.getAllLogs = asyncHandler(async (req, res, next) => {
    try {
        const logs = await Log.find()
        res.status(201).send(logs)
    } catch (e) {
        res.status(401).send('Error')

    }
})
//@desc add a log
//route POST /log
//@access private
exports.addLog = asyncHandler(async (req, res, next) => {
    try {
        const log = await Log.create(req.body)
        res.status(201).send(log)
    } catch (e) {
        res.status(401).send('Error')

    }
})
//@desc remove
//route POST /log/:id
//@access private
exports.removeLog = asyncHandler(async (req, res, next) => {
    try {
        const log = await Log.findById(req.params.id);
        if (!log) {
            res.status(404).send('not found');
        }
        log.remove();

        res.status(201).send(log)
    } catch (e) {
        res.status(401).send('Error')

    }
})
//@desc update
//route POST /log/:id
//@access private
exports.updateLog = asyncHandler(async (req, res, next) => {
    const{message,attention,tech}=req.body
    //build log type
    const logFields={}
    if (message) logFields.message=message
    if (attention) logFields.attention=attention
    if (tech) logFields.tech=tech
    try {
        const log = await Log.findById(req.params.id);
        if (!log) {
            res.status(404).send('not found');
        }
        const updatedLog=await Log.findByIdAndUpdate(req.params.id,logFields,{
            new: true,
            runValidators: true
        });

        res.status(201).send(updatedLog)
    } catch (e) {
        res.status(401).send('Error')

    }
})
