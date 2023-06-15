import { useExampleStore } from '@utama/utils/stores/example'
// import { Button } from 'antd'
import React from 'react'

export default function PageHome() {
  const { myNumber, increaseNumber } = useExampleStore()
  return (
    <>
      <div>PageHome</div>
      <div>Number: {myNumber}</div>
      {/* <Button onClick={increaseNumber}>Increase Number</Button> */}
    </>
  )
}
