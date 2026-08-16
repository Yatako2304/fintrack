import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import categoryRoutes from "./routes/category.routes";
import transactionRoutes from "./routes/transaction.routes";

// Paso 2: cargar variables del archivo .env
dotenv.config();

// Paso 3: crear la aplicación Express
const app = express();
const PORT = process.env.PORT || 3000;

// Paso 4: middlewares globales
app.use(cors()); // permite peticiones de otros orígenes
app.use(express.json()); // parsea el body de peticiones con JSON
app.use("/api/categories", categoryRoutes);
app.use("/api/transactions", transactionRoutes);

// Paso 5: rutas (por ahora una ruta de prueba)
app.get("/api/health", (_req, res) => {
  res.status(200).json({ status: "OK", message: "FinTrack API running" });
});

// Paso 6: levantar el servidor
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
