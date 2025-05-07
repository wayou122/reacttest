import { Card, Row, Col, ToggleButton } from 'react-bootstrap'
import { useState } from 'react';
function MoviePage() {
  const banner_url = 'https://taiwancinema.bamid.gov.tw//ImageData/60/2025/93435/11723.jpg?202505051418568582242'
  const img_url = 'https://taiwancinema.bamid.gov.tw//ImageData/60/2025/93435/t_93435.jpg?v=202505051034265221354'
  const [checked, setChecked] = useState(false);

  return (
    <>
      {/* <div>
        <img className='w-100' src={banner_url} />
      </div> */}
      <Card >
        <Row>
          <Col>
            <Card.Img variant="top" src={img_url} />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Col>
        </Row>
      </Card>

      <ToggleButton
        className="mb-2"
        id="toggle-check"
        type="checkbox"
        variant="secondary"
        checked={checked}
        value="1"
        onChange={(e) => setChecked(e.currentTarget.checked)}
      >
        {checked ? '分數最高 ▲' : '分數最低 ▼'}
      </ToggleButton>
      <ToggleButton
        className="mb-2"
        id="toggle-check"
        type="checkbox"
        variant="secondary"
        checked={checked}
        value="1"
        onChange={(e) => setChecked(e.currentTarget.checked)}
      >
        {checked ? '評論最多 ▲' : '評論最少 ▼'}
      </ToggleButton>

    </>
  )
}
export default MoviePage