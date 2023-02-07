// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prismaClient from '../../../database'
import IProductDTO from '../../../interfaces/IProductDTO'

export default async function AllItens(
  req: NextApiRequest,
  res: NextApiResponse<IProductDTO[]>
) {
  const itens = await prismaClient.itens.findMany()
  res.status(200).json(itens)
}