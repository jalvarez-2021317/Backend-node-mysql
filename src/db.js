import {createPool} from "mysql2/promise"

export const pool =createPool({
    host:"localhost",
    user: "root",
    password:"59757560",
    port: 3306,
    database:"companydb"
})