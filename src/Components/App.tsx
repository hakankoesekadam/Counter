import React, { useState } from "react"
import clsx from "clsx"
import styles from "./App.module.scss"
import Button from "./Button/Button"

const App = () => {
  const [count, setCount] = useState(0)
  const handleCount = () => {
    setCount(count + 1)
  }

  const handleClickDelete = () => {
    setCount(0)
  }

  return (
    <div className={clsx(styles.app)}>
      <span className={styles.count}>{count}</span>
      <Button typeCount onClick={() => handleCount()}>
        Count
      </Button>
      <Button typeDelete onClick={() => handleClickDelete()}>
        Delete
      </Button>
    </div>
  )
}

export default App
