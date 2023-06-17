import { conex } from "../../db/db.js";

export const GetResident = async (req,res) => {
    try {
        const Id = parseInt(req.query.id);
        const [result] = await conex.query("SELECT * FROM Resident WHERE IdResident = ?;",[Id])
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            message: "something goes wrong"
        })
    }
}

export const GetResidents = async (req,res) => {
    try {
        const [result] = await conex.query("SELECT * FROM Resident;")
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            message: "something goes wrong"
        })
    }
}

export const UpdateResident = async (req,res) => {
    try {
        const {Id,Name,Birthday,TypeDocument,Phone,Email,State,Pass,NumberHouse} = req.body
        const [result] = await conex.query("call UpdateResident(?,?,?,?,?,?,?,?,?)",[Id,Name,Birthday,TypeDocument,Phone,Email,State,Pass,NumberHouse])
        if(result.affectedRows === 0) return res.status(404).json({
            message: "User not found to update"
        })
        const [rows] = await conex.query("Select * from Resident where IdResident = ?",[Id])
        res.json(rows[0]); 
    } catch (error) {
        return res.status(500).json({
            message: "something goes wrong"
        })
    }
}

export const NewResident = async (req,res) => {
    try {
        const {Id,Name,Birthday,TypeDocument,Phone,Email,Pass,NumberHouse} = req.body
        const [result] = await conex.query("CALL RegisterResident(?,?,?,?,?,?,?,?);",[Id,Name,Birthday,TypeDocument,Phone,Email,Pass,NumberHouse])
        if(result.affectedRows === 0) return res.status(404).json({
            message: "Cant user register"
        })
        console.log(req.body);
        console.log(result);
        const [rows] = await conex.query("Select * from Resident where IdResident = ?",[Id])
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: "something goes wrong"
        })
    }
}