import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

function App() {
  const [count, setCount] = useState(0)
  const [copyCount, setCopyCount] = useState(count)
  const [isOpenModal, setIsOpenModal] = useState(false)

  function saveCount() {
    setCount(copyCount)
    setIsOpenModal(false)
  }

  return (
    <div className='m-2'>
      <h1 className='d-inline-block me-3'>{count}</h1>
      <button onClick={() => setIsOpenModal(true)}>Click</button>

      <Modal isOpen={isOpenModal} toggle={() => setIsOpenModal(false)} >
        <ModalHeader toggle={() => setIsOpenModal(false)}>Modal title</ModalHeader>
        <ModalBody className='d-flex justify-content-between'>
          <h3>Count = {copyCount}</h3>
          <div className='d-flex gap-2'>
            <button onClick={() => setCopyCount(copyCount + 1)}>Increase</button>
            <button onClick={() => {
              if (copyCount > 0) {
                setCopyCount(copyCount - 1)
              }
            }}
            >
              Decrease
            </button>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => saveCount()}>
            Save
          </Button>
          <Button
            color="secondary"
            onClick={() => {
              setIsOpenModal(false)
              setCopyCount(count)
            }}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default App