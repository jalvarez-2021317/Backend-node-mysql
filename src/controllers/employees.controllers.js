import { pool } from "../db.js"

const getEmployees = async (req, res) => {
    const [rows] = await pool.query("SELECT * FROM employees")
    res.json(rows)
}

const getEmployee = async (req, res) => {
    const [rows] = await pool.query("SELECT  * FROM employees WHERE id = ?", [req.params.id])
    if (rows.length <= 0) return res.status(404).json({
        message: "Employee not found"
    })

    res.json(rows[0])

}

const createEmployees = async (req, res) => {
    const { name, salary } = req.body
    const [rows] = await pool.query("INSERT INTO employees (name, salary) VALUES (?,?)", [name, salary])
    res.send({
        id: rows.insertId,
        name,
        salary
    })
}

const updateEmployees = (req, res) => res.send("Obteniendo empleados")

const deleteEmployees = async (req, res) => {
 
    const [result] = await pool.query("DELETE FROM employees WHERE id = ?", [req.params.id]);

    if (result.affectedRows <= 0) return res.status(404).json({ message: "Employee not found" });

    res.sendStatus(204)
}


export {
    getEmployee,
    getEmployees,
    createEmployees,
    updateEmployees, deleteEmployees
}