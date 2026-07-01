
import Chai from "./chai"
//always uppercase the tagname first letter

function App() {
  return (
    <>
    <Chai/>
    <p>hello everyone</p>
    </>
    
  )
}

export default App

//u can only print one tag at a time in react.jsx, so we can use empty (<> </>)fragment to print multiple tags at a time, 
// but it will not be visible in the dom, it is just a wrapper for multiple tags. we can also use div as a wrapper
//  but it will be visible in the dom. so we can use fragment instead of div.  