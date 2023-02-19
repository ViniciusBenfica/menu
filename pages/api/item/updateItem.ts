import prismaClient from "database"
import UpdateItemDTO from "interfaces/items/UpdateItemDTO"
import { NextApiRequest, NextApiResponse } from "next"

export default async function updateItem(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  if (req.method === 'PUT') {

    const item: UpdateItemDTO = req.body
    const id = Number(req.query.id)

    const payload = await prismaClient.items.update({
      where: { id },
      data: { ...item }
    })

    res.status(201).json(payload)

  } else {
    res.json("Wrong method, please change to PUT")
  }
}