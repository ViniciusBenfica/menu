// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import IProductDTO from '../../interfaces/IProductDTO'

export default function itens(
  req: NextApiRequest,
  res: NextApiResponse<IProductDTO[]>
) {
  res.status(200).json([
    {
      id: 1,
      name: 'Aussie Beef Quesadillas',
      price: 4.99,
      description: 'Pétalas da Bloomin Onion, tiras de filet mignon, mix de queijos e tomate. Tudo'
    },
    {
      id: 2,
      name: 'Teste Beef Quesadillas',
      price: 6.99,
      description: 'Pétalas da Bloomin Onion, tiras de filet mignon, mix de queijos e tomate. Tudo'
    },
  ]
  )
}
