import React,{Fragment,Component}from 'react';
//Fragment可以当成根元素使用，不会再页面显示
import Box from './tab/box2'


function App(){
  return(
    <Fragment>
      <Box></Box>
    </Fragment>
  )
}
export default App;