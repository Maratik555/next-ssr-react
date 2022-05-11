import MainContainer from '../components/MainContainer'
import Image from 'next/image'

const Index = () => {
  return (
    <MainContainer keywords={'main page'}>
      <br/>
      <h1 style={{ textAlign: 'center'}}>Главная страница 😊</h1> 
      <br />
      <div style={{ textAlign: 'center' }}>
        <Image
    src="/images/1.jpg" // Route of the image file
    height={230} // Desired size with correct aspect ratio
    width={350} // Desired size with correct aspect ratio
          alt="Your Name"
          placeholder="blur"
  />
      </div>
      <br/>
      <h2 style={{ textAlign: 'center' }}> Next js APP</h2>
    </MainContainer>
  )
}

export default Index
