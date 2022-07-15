import React, { useState, useEffect } from 'react'
import styles from './App.module.css'
import $ from "jquery"

function App() {
  
  const [data, setData] = useState([{}])
  
  useEffect(() => {
    setInterval(() => {
      fetch("/members").then(
        res => res.json()
      ).then(
        data => {
          setData(data)
        }
      )
    }, 1000)
  }, [])

  let price = JSON.stringify(data);
  
  return (
    <div className={styles.container}>
      <div className={styles.header}></div>
      <div className={styles.display}>
        <h3 className={styles.priceFont}>LINK Price: {price}</h3>
        <div className={styles.fadeOut} />
      </div>
    </div>
  )

}

export default App
