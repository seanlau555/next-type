import React, { useState } from 'react'

interface Props {
  name: string
}
// has function in FC
export const HelloWorld: React.FC<Props> = ({ name }) => {
  // overwrite the generic property type
  // const [state] = useState<{ fullname: string | null }>({ fullname: '' })
  // state.fullname
  //
  const [state] = useState({ name: '' })
  state.name

  return <div>hellow {name}</div>
}

interface FormProps<T> {
  values: T
  children: (values: T) => JSX.Element
}
//
// only a render component
export const Form = <T extends {}>({ values, children }: FormProps<T>) => {
  return children(values)
}

// render component props at least is an object = Cannot find name T
// use extends {}
// const as = <T>(name: T) => {
//   return x
// }
