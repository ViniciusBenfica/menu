import prismaClient from "database"
import { NextApiRequest, NextApiResponse } from "next"

export default async function AddItem(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  if (req.method === 'PUT') {

    const id = Number(req.query.id)

    const payload = await prismaClient.items.update({
      where: { id },
      data: {
        views: {
          increment: 1,
        },
      }
    })

    res.status(201).json(payload)

  } else {
    res.json("Wrong method, please change to PUT")
  }
}