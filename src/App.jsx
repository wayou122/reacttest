import { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import WordTest from './WordTest'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Row className='d-flex justify-content-center mt-5 m-0'>
        <Col xs={7} sm={5} md={4} lg={3}>
          <WordTest></WordTest>
        </Col>
      </Row>
    </>
  )
}

export default App
