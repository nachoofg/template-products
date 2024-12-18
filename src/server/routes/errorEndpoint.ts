import express from 'express'
const router = express.Router()
router.get('/', async (req, res) =>{
    return res.status(404).send('not ok')
})

export = router