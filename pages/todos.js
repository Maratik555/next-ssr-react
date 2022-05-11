import Link from "next/link"
import MainContainer from "../components/MainContainer"

const Todos = ({ todos }) => {
  return (
    <MainContainer keywords={"todos next js"}>
      <br />
      <h1 style={{ textAlign: "center" }}>Cписок todos 😀</h1>
      <br />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link href={`/todo/${todo.id}`}>
              <a>
                {todo.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default Todos

export async function getStaticProps(ctx) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=15`) 
  const todos = await response.json()

  return {
    props: { todos }
  }
}
