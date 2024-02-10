import { Router } from "express"
import { createEmployees, deleteEmployees, updateEmployees, getEmployees, getEmployee } from "../controllers/employees.controllers.js"

const router = Router()

router.get("/employees", getEmployees)
router.get("/employee/:id",getEmployee)
router.post("/employes", createEmployees)
router.put("/employes",updateEmployees)
router.delete("/employes",deleteEmployees )


export default router