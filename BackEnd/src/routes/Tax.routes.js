import { Router } from "express";
import { GetTax, GetTaxes, NewTax } from "../controllers/Tax.controller.js";

const router = Router()

router.post("/Tax", NewTax);

router.get("/Tax", GetTax);

router.get("/Taxes", GetTaxes);

export default router