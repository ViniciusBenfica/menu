// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prismaClient from '../../../database'

export default async function getItems(
  req: NextApiRequest,
  res: NextApiResponse<any[]>
) {

  const itens = await prismaClient.owner.findMany({
    include: {
      restaurants: true
    }
  }
  )
  res.status(200).json(itens)
}