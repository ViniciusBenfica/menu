import prismaClient from "database"
import { NextApiRequest, NextApiResponse } from "next"

export default async function getItems(
  req: NextApiRequest,
  res: NextApiResponse<any[]>
) {

  const itens = await prismaClient.category.findMany({
   
  }
  )
  res.status(200).json(itens)
}