import React from 'react'
import Orcs from './Orcs'
import Mountain from './Mountain'
import Gold from './Gold'
import Hobbits from './Hobbits'

const Scams = () => {
    return (
        <div className="small-12 columns other-articles">
            <h2>From around the Realm</h2>
              <Orcs />
              <Mountain />
              <Gold />
              <Hobbits />
        </div>
    )
}

export default Scams