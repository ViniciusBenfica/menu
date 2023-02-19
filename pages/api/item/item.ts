// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prismaClient from '../../../database'

export default async function Item(
  req: NextApiRequest,
  res: NextApiResponse<any | null>
) {
  const idProduct = req.query.idProduct as string
  const item = await prismaClient.items.findFirst({ where: { id: { equals: +idProduct } } })
  res.status(200).json(item)
}