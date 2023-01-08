// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prismaClient from '../../../database'
import IProductDTO from '../../../interfaces/IProductDTO'

export default async function Item(
  req: NextApiRequest,
  res: NextApiResponse<IProductDTO | null>
) {
  const idProduct = req.query.idProduct as string
  const item = await prismaClient.itens.findFirst({ where: { id: { equals: +idProduct } } })
  res.status(200).json(item)
}