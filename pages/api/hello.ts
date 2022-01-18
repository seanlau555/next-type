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
// Array
// 2 generics, return, overwrite inference, default type
// extends
// interfaces
//
type numArray = Array<number>
// type numArray = number[]
//
//
// const last = (arry: T[])
const last = <T>(arr: Array<T>): T => {
  return arr[arr.length - 1]
}

const l = last([1, 2, 3])
const l2 = last<string>(['a', 'b', 'c'])

//                  Y default type number
const makeArr = <X, Y = number>(x: X, y: Y): [X, Y] => {
  return [x, y]
}

const a = [0, 1, null]

const v = makeArr(5, 6)
const v2 = makeArr('a', 'b')
const v3 = makeArr('a', 5)
const v4 = makeArr<string | null, number>(null, 5)

// extends
const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T,
) => {
  return {
    ...obj,
    fullName: obj.firstName + ' ' + obj.lastName,
  }
}

const v5 = makeFullName({ firstName: 'bob', lastName: 'junior', age: 15 })
// v5.
// const v6 = makeFullName({another: 'bob', lastName: 'junior', age: 15})

// interfaces
interface Tab {
  id: string
  position: number
  data: T
}
