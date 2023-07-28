import express from 'express'
import {Addstudent, Deletestudent, Getstudent, Getstudentbyid, Updatestudent} from '../Controller/Controller.js'

const router =express.Router()


router.post('/add',Addstudent)
router.get('/get',Getstudent)
router.get('/get/:id',Getstudentbyid)
router.put('/update/:id',Updatestudent)
router.delete('/delete/:id',Deletestudent)

export default router