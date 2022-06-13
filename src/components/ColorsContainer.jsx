import React, {  useState } from 'react'
import Color from './Color'


import InfiniteScroll from 'react-infinite-scroll-component';




export default function ColorsContainer() {
  
  const generateRandomColor = () => {
    const newColors = [];
    for(let i=0 ; i < 40 ; i++){
      let randomColor = Math.floor(Math.random()*16777215).toString(16);
      if(randomColor.length === 5){
        i--;
        continue    //ak vytvori zlu farbu tak ju preskocim
      }
      newColors.push(`#${randomColor}`);
    }
    return newColors
  }
  
  const [colors,setColors] = useState(generateRandomColor());
  
  return (
    <>
        <div className="container-fluid">
          <InfiniteScroll 
          dataLength={colors.length}
          next={() => {
            setColors(prevColors => [...prevColors,...generateRandomColor()])
            }}
          hasMore={true}
          className="row d-flex mx-1 py-3"
          >
          {colors.map(color => <Color color={color}/>)}
          </InfiniteScroll>
        </div>
    </>
  )
}
