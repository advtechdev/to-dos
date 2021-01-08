import Layout from "components/layout"
import ToDosAdd from "components/toDosAdd"
import ToDosList from "components/toDosList"

const HomePage = () => (
  <Layout>
    <ToDosAdd />

    <ToDosList />
  </Layout>
)

export default HomePage
