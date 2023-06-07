import { Router } from "express";
import { GetResident, GetResidents, NewResident } from "../controllers/Resident.controller.js";

const router = Router()

router.post("/Resident", NewResident);

router.get("/Resident", GetResident);

router.get("/Residents", GetResidents);

export default router