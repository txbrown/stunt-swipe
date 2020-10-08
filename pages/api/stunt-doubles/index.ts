import { NextApiRequest, NextApiResponse } from 'next'
import { stuntDoubleList } from '../../../utils/sample-data'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(stuntDoubleList)) {
      throw new Error('Cannot find stunt-men data')
    }

    res.status(200).json(stuntDoubleList)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
