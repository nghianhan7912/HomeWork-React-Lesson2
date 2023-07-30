import React, { useState } from 'react'
import glassList from './data.json'
import Model from './Model'
import Glasses from './Glasses'

const BaiTapGlasses = () => {
  const [glasses,setGlasses] = useState(glassList[0])
  const handleGlass = (prd) => {
    setGlasses(prd)
  }
  return (
    <div>
        <h1 className='py-4 text-white'style={{backgroundColor: " rgba(0, 0, 0, 0.3)"}}>Try Glasses App Online</h1>
        {/* Model */}
        <Model glassList={glassList} glasses={glasses}/>
        {/* Glasses */}
        <Glasses handleGlass={handleGlass} glassList={glassList}/>
    </div>
  )
}

export default BaiTapGlasses