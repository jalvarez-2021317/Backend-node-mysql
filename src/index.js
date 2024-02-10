import express from "express"
import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

app.use(express.json())
app.use( "/api",employeesRoutes)
app.use("/api",indexRoutes)



app.listen(3000)
console.log("server Running on port 3000");