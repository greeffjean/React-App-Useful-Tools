import { FC } from 'react'
import { Container } from 'react-bootstrap'

type TProps = {
  head: string,
  description: string
}

const Header: FC<TProps> = ({ head, description }) => {
  return (
    <Container>
      <div className='starter-template text-center mt-5'>
        <h1>{head} Page</h1>
        <p className='lead text-capitalize'>{description}</p>
      </div>
    </Container>
  )
}

export default Header
