// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

var click: number = 0

export default function clickCounter(
  req: NextApiRequest,
  res: NextApiResponse<{click: number}>
) {
  const { idProduct }: {idProduct: number} = req.body
  click = ++click
  res.status(200).json({click})
}
