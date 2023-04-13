import { NextFont } from 'next/dist/compiled/@next/font'
import React from 'react'

type FontsWrapperProps = {
  font: NextFont
  children: React.ReactNode | React.ReactNode[]
}

export function FontsWrapper({ font, children }: FontsWrapperProps) {
  return <section className={font.className}>{children}</section>
}
