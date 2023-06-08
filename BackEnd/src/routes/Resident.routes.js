import { Router } from "express";
import { GetResident, GetResidents, NewResident, UpdateResident } from "../controllers/Resident.controller.js";

const router = Router()

router.post("/Resident", NewResident);

router.get("/Resident", GetResident);

router.get("/Residents", GetResidents);

router.put("/Resident", UpdateResident)

router.delete("/Resident/:id")

export default router