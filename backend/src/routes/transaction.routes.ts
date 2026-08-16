import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.status(200).json({ message: "Lista transacciones" });
});

router.get("/:id", (req, res) => {
  res.status(200).json({ message: `Transaccion con id: ${req.params.id}` });
});

router.post("/", (_req, res) => {
  res.status(201).json({ message: "Crea una transaccion" });
});

router.put("/:id", (req, res) => {
  res
    .status(200)
    .json({ message: `Reemplaza la transaccion: ${req.params.id}` });
});

router.patch("/:id", (req, res) => {
  res
    .status(200)
    .json({ message: `Modifica parte de la transaccion ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.status(204).send();
});

export default router;
