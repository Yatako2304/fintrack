import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.status(200).json({ message: "Lista de categorías" });
});

router.get("/:id", (req, res) => {
  res.status(200).json({ message: `Categoría con id: ${req.params.id}` });
});

router.post("/", (_req, res) => {
  res.status(201).json({ message: "Categoría creada" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ message: `Categoría ${req.params.id} actualizada` });
});

router.delete("/:id", (req, res) => {
  res.status(204).send();
});

export default router;
