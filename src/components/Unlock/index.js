// Write your code here
import {useState} from 'react'
import {LockImage, Heading, Button, Container} from './styledComponents'

const Unlock = () => {
  const [lock, setLock] = useState(false)

  const changeLock = () => {
    setLock(prevState => !prevState)
  }
  return (
    <Container>
      {!lock ? (
        <LockImage
          src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
          alt="lock"
        />
      ) : (
        <LockImage
          src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
          alt="unlock"
        />
      )}
      <Heading>
        {!lock ? 'Your Device is Locked' : 'Your Device is Unlocked'}
      </Heading>
      <Button type="button" onClick={changeLock}>
        {lock ? 'Lock' : 'Unlock'}
      </Button>
    </Container>
  )
}

export default Unlock
