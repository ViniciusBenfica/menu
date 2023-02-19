import prismaClient from "database"
import CreateRestaurantDTO from "interfaces/restaurant/CreateRestaurantDTO"
import { NextApiRequest, NextApiResponse } from "next"

export default async function createRestaurant(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  if (req.method === 'POST') {

    const restaurant: CreateRestaurantDTO = req.body

    const payload = await prismaClient.restaurant.create({
      data: { ...restaurant }
    })

    res.status(201).json(payload)

  } else {
    res.json("Wrong method, please change to POST")
  }
}