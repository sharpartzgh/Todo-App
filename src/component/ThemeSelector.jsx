// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// import React from 'react'
// import { createContext, useState, useContext } from "react";

// const themeContext = createContext()

// export const ThemeSelector = ({children}) => {

//   const [darkMode, setDarkMode] = useState(false)
//   // lets create a handler function to handle the switch
//   const switchTheme = () => setDarkMode(prev => !prev)

//   return (
//        <themeContext.Provider value={{darkMode, switchTheme}}>
//         {children}
//       </themeContext.Provider>
//    )
// }
// export const GetTheme = () => useContext(themeContext)