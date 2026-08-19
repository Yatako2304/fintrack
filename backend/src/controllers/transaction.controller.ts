import { Request, Response } from "express";
import * as transactionService from "../services/transaction.service";

export const getAll = async (_req: Request, res: Response) => {
  try {
    const userId = 1;
    const transactions = await transactionService.getAllTransactions(userId);
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las transacciones" });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const userId = 1;
    const id = parseInt(req.params.id as string);
    const transaction = await transactionService.getTransactionById(id, userId);

    if (!transaction) {
      res.status(404).json({ message: "Transaccion no encontrada" });
      return;
    }

    res.status(200).json(transaction);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener transaccion" });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const userId = 1;
    const { amount, description, type, date, categoryId } = req.body;
    const transaction = await transactionService.createTransaction({
      amount,
      description,
      type,
      date,
      categoryId,
      userId,
    });
    res.status(201).json(transaction);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al crear transacción" });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const userId = 1;
    const id = parseInt(req.params.id as string);
    const { amount, description, type, date, categoryId } = req.body;
    const transaction = await transactionService.updateTransaction(id, userId, {
      amount,
      description,
      type,
      date,
      categoryId,
    });
    res.status(200).json(transaction);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar transacción" });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id as string);
    await transactionService.deleteTransaction(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar transaccion" });
  }
};
