// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prismaClient from '../../../database'

export default async function getRestaurants(
  req: NextApiRequest,
  res: NextApiResponse<any[]>
) {

  const restaurants = await prismaClient.restaurant.findMany({
    include: {
      products: true
    }
  })
  res.status(200).json(restaurants)
}