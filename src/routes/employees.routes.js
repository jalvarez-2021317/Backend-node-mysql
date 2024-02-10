import { Router } from "express"
import { createEmployees, updateEmployees, getEmployees, getEmployee, deleteEmployees } from "../controllers/employees.controllers.js"

const router = Router()

router.get("/employees", getEmployees)
router.get("/employee/:id",getEmployee)
router.post("/employees", createEmployees)
router.patch("/employees/:id",updateEmployees)
router.delete("/employees/:id",deleteEmployees );


export default router