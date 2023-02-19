import prismaClient from "database"
import CreateOwnerDTO from "interfaces/owner/createOwnerDTO"
import { NextApiRequest, NextApiResponse } from "next"

export default async function createOwner(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  if (req.method === 'POST') {

    const owner: CreateOwnerDTO = req.body

    const payload = await prismaClient.owner.create({
      data: { ...owner }
    })

    res.status(201).json(payload)

  } else {
    res.json("Wrong method, please change to POST")
  }
}