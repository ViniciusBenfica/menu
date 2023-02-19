import prismaClient from "database"
import CreateCategoryDTO from "interfaces/category/CreateCategory"
import { NextApiRequest, NextApiResponse } from "next"


export default async function createItem(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  if (req.method === 'POST') {

    const category: CreateCategoryDTO = req.body

    const payload = await prismaClient.category.create({
      data: { ...category }
    })

    res.status(201).json(payload)

  } else {
    res.json("Wrong method, please change to POST")
  }
}