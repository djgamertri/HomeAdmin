import express from "express";
import TaxRoutes from "./routes/Tax.routes.js";
import ResidentRoutes from "./routes/Resident.routes.js"
import { PORT } from "../db/config.js";
import cors from "cors";

const app = express()


app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use("/api", TaxRoutes)
app.use("/api", ResidentRoutes)

app.use((req,res,next) => {
    res.status(404).json({
        message: "This page not found"
    })
})

app.listen(3001)