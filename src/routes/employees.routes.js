import { Router } from "express"
import { createEmployees, deleteEmployees, updateEmployees, getEmployees } from "../controllers/employees.controllers.js"

const router = Router()

router.get("/employes", getEmployees)
router.post("/employes", createEmployees)
router.put("/employes",updateEmployees)
router.delete("/employes",deleteEmployees )


export default router