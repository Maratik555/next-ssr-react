import { useRouter } from "next/router"
import styles from "../../styles/user.module.scss"
import MainContainer from "../../components/MainContainer"

export default function Todo({ todo }) {
  const { query } = useRouter()
  return (
    <MainContainer keywords={todo.title}>
      <div className={styles.todo}>
        <h1>Todo c id {query.id}</h1>
        <br/>
        <div>Todo : {todo.title}</div>
      </div>
    </MainContainer>
  )
}

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.id}`
  )
  const todo = await response.json()
  return {
    props: { todo }
  }
}
