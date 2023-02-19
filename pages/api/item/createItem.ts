// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import CreateItemDTO from 'interfaces/items/CreateItemDTO'
import type { NextApiRequest, NextApiResponse } from 'next'
import prismaClient from '../../../database'

export default async function createItem(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  if (req.method === 'POST') {

    const item: CreateItemDTO = req.body

    const payload = await prismaClient.items.create({
      data: { ...item }
    })

    res.status(201).json(payload)

  } else {
    res.json("Wrong method, please change to POST")
  }
}