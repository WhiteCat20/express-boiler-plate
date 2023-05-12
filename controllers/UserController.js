import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const saveApplicant = async (req, res) => {
  const { name, city } = req.body;
  const newApplicant = await prisma.applicant.create({
    data: {
      name,
      city,
      photo: req.files["photo"][0].path,
      bukti_pembayaran: req.files["bukti_pembayaran"][0].path,
    },
  });
  res.status(201).json({ newApplicant });
};
