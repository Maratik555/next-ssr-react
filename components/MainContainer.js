import A from './A'
import Head from 'next/head'
import Footer from './Footer'

const MainContainer = ({children, keywords}) => {
  return (
    <>
      <Head>
        <meta keywords={'react,  nextjs' + keywords}/>
        <title>Главная страница</title>
      </Head>
      <div className="navbar">
        <A href={'/'} text="Главная" />
        <A href={'/posts'} text="Посты"/>
        <A href={'/todos'} text="Todos"/>
      </div>
      <div>
        {children}
      </div>
      <Footer />
      <style jsx>
        {`
          .navbar {
          display: flex;
           min-height: 80px;
          justify-content: space-around;
          align-items: center;
          background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.5)
  );
          padding: 10px;
          }
        `}
      </style>
    </>
  )
}

export default MainContainer