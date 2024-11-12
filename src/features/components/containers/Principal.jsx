import React from 'react'
import { LateralBar } from '../LateralBar'

export const Principal = ({ children }) => {
  return (
    <div>
      <div className='bigContainer'>

        <aside>
          <LateralBar />
        </aside>

        <div className='container'>{children}</div>

      </div>
    </div>
  )
}
