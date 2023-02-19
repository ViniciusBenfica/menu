// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prismaClient from '../../../database'

export default async function AllItens(
  req: NextApiRequest,
  res: NextApiResponse<any[]>
) {

  const itens = await prismaClient.items.findMany()
  res.status(200).json(itens)
}