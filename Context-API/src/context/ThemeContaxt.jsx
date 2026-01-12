import React, { createContext } from 'react'

 export const ThemeDataContext = createContext()

const ThemeContaxt = (props) => {
  return (
    <div>
      <ThemeDataContext.Provider value='Bindu'>
        {props.children}
      </ThemeDataContext.Provider>
    </div>
  )
}

export default ThemeContaxt