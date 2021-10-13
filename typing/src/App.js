import React, { useState } from 'react'

const App = () => {
  const [typedKeys, setTypedKeys] = useState([])
  
  const handleKeyDown = (e) => {
    e.preventDefault()
    const { key } = e;
    console.log('key', key)
  }

  return (
    <div className="container" tabIndex="0" onKeyDown={handleKeyDown}>
      <div className="valid-keys">
        <span className="matched">emer</span>
        <span className="remainder">son</span>
      </div>
      <div className="typed-keys">asdfemerasdf</div>
      <div className="completed-words">
        <ol>
          <li>cidade</li>
          <li>carro</li>
          <li>profissional</li>
        </ol>
      </div>
    </div>
  )
}

export default App