// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ name: 'John Doe' })
}

// generic type
type numArray = Array<number>
// type numArray = number[]
//
//
// const last = (arry: number[])
const last = (arr: Array<number>) => {
  return arr[arr.length - 1]
}

const l = last([1, 2, 3])
