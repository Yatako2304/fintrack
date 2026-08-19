import { Request, Response } from "express";
import * as categoryService from "../services/category.service";

export const getAll = async (_req: Request, res: Response) => {
  try {
    const categories = await categoryService.getAllCategories();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener categorías" });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id as string);
    const category = await categoryService.getCategoryById(id);

    if (!category) {
      res.status(404).json({ message: "Categoría no encontrada" });
      return;
    }

    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener categoría" });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const category = await categoryService.createCategory(name);
    res.status(201).json(category);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al crear categoría" });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id as string);
    const { name } = req.body;
    const category = await categoryService.updateCategory(id, name);
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar categoría" });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id as string);
    await categoryService.deleteCategory(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar categoría" });
  }
};
