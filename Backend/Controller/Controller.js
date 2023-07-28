import db from '../Model.js';
export const Addstudent = (req, res) => {
        
        let { Name, Email }= req.body
        const sql = 'INSERT INTO `student`(`name`, `email`) VALUES (?,?)'
        db.query(sql, [Name,Email], (err, data) => {
                if (err) throw err

                console.log(data)
        })
}

export const Getstudent = (req, res) => {
        const sql = 'SELECT * FROM `student`'
        db.query(sql, (err, data) => {
                if (err) throw err;

                res.json(data);

        })
}
export const Getstudentbyid = (req, res) => {
        const sql = 'SELECT * FROM `student` WHERE `id`=?'
        const {id}= JSON.parse(req.params.id)
        console.log('sdf.....sfd', id);
        db.query(sql,[id], (err, data) => {
                if (err) throw err;

                res.json(data);

        })
}
export const Updatestudent=(req,res)=>{
        let { Name, Email }= req.body
        const sql = 'UPDATE `student` SET `name`=? ,`email`=? WHERE `id`=?'
        const {id}= JSON.parse(req.params.id)
        console.log(id);
        db.query(sql, [Name,Email,id], (err, data) => {
                if (err) throw err

                console.log(data)
        })
}

export const Deletestudent=(req,res)=>{
        const sql = 'DELETE FROM `student` WHERE `id`=?'
        const {id}= req.params
        console.log(id);
        db.query(sql,[id], (err, data) => {
                if (err) throw err;

                res.json(data);

        })
}