import React from 'react'

export default function HoneyCell({ style = {}, size = 18, opacity = .25 }) {
  return (
    <span
      className="honey-cell"
      style={{ width: size, height: size, opacity, ...style }}
    />
  )
}