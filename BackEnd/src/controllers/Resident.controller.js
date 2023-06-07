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

export const NewResident = async (req,res) => {
    try {
        const {Id,Name,Age,TypeDocument,NumDocument,Phone,Email,NumberHouse} = req.body
        const [result] = await conex.query("CALL RegisterResident(?,?,?,?,?,?,?,?);",[Id,Name,Age,TypeDocument,NumDocument,Phone,Email,NumberHouse])
        res.json({
            Id,
            Name,
            Age,
            TypeDocument,
            NumDocument,
            Phone,
            Email,
            NumberHouse
        });
    } catch (error) {
        return res.status(500).json({
            message: "something goes wrong"
        })
    }
}