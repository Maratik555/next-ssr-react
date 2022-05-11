import Link from 'next/link'
import MainContainer from '../components/MainContainer'

const Posts = ({posts}) => {
  return (
    <MainContainer keywords={'posts next js'}>
      <br/>
      <h1 style={{ textAlign: 'center' }}>Cписок постов 😀</h1>
      <br/>
      <ul>
        {posts.map(({title, id}) =>
          <li key={id}>
            <Link href={`/post/${id}`}>
              <a><b>{title}</b></a>
            </Link>
          </li>
        )}
      </ul>
    </MainContainer>
  )
}

export default Posts

export async function getStaticProps(ctx) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=15`)
  const posts = await response.json()

  if (!posts) {
    return {
      notFound: true
    }
  }
  
  return {
    props: {posts}
  }
}
