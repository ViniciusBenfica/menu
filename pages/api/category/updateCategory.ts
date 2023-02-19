import prismaClient from "database"
import UpdateCategoryDTO from "interfaces/category/UpdateCategory"
import { NextApiRequest, NextApiResponse } from "next"


export default async function updateItem(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  if (req.method === 'PUT') {

    const category: UpdateCategoryDTO = req.body
    const id = Number(req.query.id)

    const payload = await prismaClient.category.update({
      where: { id },
      data: { ...category }
    })

    res.status(201).json(payload)

  } else {
    res.json("Wrong method, please change to PUT")
  }
}