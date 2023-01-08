// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prismaClient from '../../../database'
import IProductDTO from '../../../interfaces/IProductDTO'

export default async function AddItem(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const item: IProductDTO = req.body

  await prismaClient.itens.create({
    data: {...item}
  })

  res.status(201).json('Create Item')
}