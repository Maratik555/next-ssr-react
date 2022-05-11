import { useRouter } from "next/router"
import styles from "../../styles/user.module.scss"
import MainContainer from "../../components/MainContainer"

export default function User({ post }) {
  const { query } = useRouter()
  return (
    <MainContainer keywords={post.title}>
      <div className={styles.post}>
        <h1>Пост c id {query.id}</h1>
        <br />
        <div>Пост : {post.body}</div>
      </div>
    </MainContainer>
  )
}

export async function getStaticPaths() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const post = await response.json()

  const paths = post.map(({id}) => ({params: {id: id.toString()}}))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params}) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const posts = await response.json()

  if (!posts) {
    return {
      notFound: true
    }
  }
  
  return {
    props: {post: posts}
  }
}
