import prismaClient from "database"
import UpdateRestaurantDTO from "interfaces/restaurant/UpdateRestaurantDTO"
import { NextApiRequest, NextApiResponse } from "next"

export default async function createRestaurant(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  if (req.method === 'PUT') {

    const restaurant: UpdateRestaurantDTO = req.body
    const id = Number(req.query.id)

    const payload = await prismaClient.restaurant.update({
      where: { id },
      data: { ...restaurant }
    })

    res.status(201).json(payload)

  } else {
    res.json("Wrong method, please change to PUT")
  }
}