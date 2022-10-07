import React from 'react'
import ScrollIntoView from 'react-scroll-into-view'

const Button = ({ Name, Selector, BGC }) => {
  return (
    <button
      className={`${BGC} hover:bg-opacity-90 md:scale-100 md:hover:scale-110 transition font-semibold py-2 px-5 rounded-full`}>
      <ScrollIntoView selector={Selector}>{Name}</ScrollIntoView>
    </button>
  )
}

export default Button
