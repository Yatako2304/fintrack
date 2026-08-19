import prisma from "../config/db";

export const getAllTransactions = async (userId: number) => {
  return await prisma.transaction.findMany({
    where: { userId },
    include: { category: true },
  });
};

export const getTransactionById = async (id: number, userId: number) => {
  return await prisma.transaction.findFirst({
    where: { id, userId },
    include: { category: true },
  });
};

export const createTransaction = async (data: {
  amount: number;
  description?: string;
  type: "INGRESO" | "GASTO";
  date: string;
  categoryId: number;
  userId: number;
}) => {
  return await prisma.transaction.create({
    data: {
      amount: data.amount,
      description: data.description ?? null,
      type: data.type,
      date: new Date(data.date),
      categoryId: data.categoryId,
      userId: data.userId,
    },
    include: { category: true },
  });
};

export const updateTransaction = async (
  id: number,
  userId: number,
  data: {
    amount?: number;
    description?: string;
    type?: "INGRESO" | "GASTO";
    date?: string;
    categoryId?: number;
  },
) => {
  return await prisma.transaction.update({
    where: { id, userId },
    data: {
      amount: data.amount,
      description: data.description ?? null,
      type: data.type,
      date: data.date ? new Date(data.date) : undefined,
      categoryId: data.categoryId,
    },
    include: { category: true },
  });
};

export const deleteTransaction = async (id: number) => {
  return await prisma.transaction.delete({ where: { id } });
};
