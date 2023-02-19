import prismaClient from "database"
import { NextApiRequest, NextApiResponse } from "next"

export default async function AddItem(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  if (req.method === 'DELETE') {

    const id = Number(req.query.id)

    const payload = await prismaClient.items.delete({
      where: {
        id
      }
    })

    res.status(201).json(payload)

  } else {
    res.json("Wrong method, please change to DELETE")
  }
}