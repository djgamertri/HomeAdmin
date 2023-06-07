import { conex } from "../../db/db.js";

export const GetTax = async (req,res) => {
    try {
        const Id = parseInt(req.query.id);
        const [result] = await conex.query("SELECT * FROM Tax WHERE TaxId = ?;",[Id])
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            message: "something goes wrong"
        })
    }
}

export const GetTaxes = async (req,res) => {
    try {
        const [result] = await conex.query("SELECT * FROM Tax;")
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            message: "something goes wrong"
        })
    }
}

export const NewTax = async (req,res) => {
    try {
        const {TaxValue,TaxYear} = req.body
        const [result] = await conex.query("CALL RegisterTax(?,?);",[TaxValue,TaxYear])
        res.json({
            TaxValue,
            TaxYear
        });
    } catch (error) {
        return res.status(500).json({
            message: "something goes wrong"
        })
    }
}