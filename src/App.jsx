import './App.css'
import Canvas from './Canvas'

function App() {

  return (
    <>
      <h1>Clock with Clocks</h1>
      <div className='instruction'>click on the clock (once) if you do not want to wait 60 seconds</div>
      <Canvas />
      <p>this is a knockoff react demo of a real clock created by <a href='https://www.humanssince1982.com/a-million-times-san-jose-2021'>humanssince1982</a>. It is called <b>A million Times</b> and is located at the San José Airport</p>
      
    </>
  )
}

export default App
