import React from 'react'
import GlassesItem from './GlassesItem'

const Glasses = ({handleGlass,glassList}) => {
  return (
    <div className='container' style={{paddingLeft:200,paddingRight:200}}>
        <div className="row" style={{backgroundColor: 'white'}}>
            {glassList.map((prd)=>(
                <GlassesItem key={prd.id} prd ={prd} handleGlass={handleGlass}/>
            ))}
        </div>
    </div>
  )
}

export default Glasses