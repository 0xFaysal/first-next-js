import React from 'react'

function Button({children}:Readonly<{
    children: string
    }>) :React.JSX.Element {
  return (
    <button className='px-3 py-1 bg-purple-500 rounded-xl'>{children}</button>
  )
}

export default Button