import { useGetTodosQuery } from "../../redux/api/api";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

export default function TodoContainer() {
  // get data from lodal state
  // const { todos } = useAppSelector((state) => state.todos);

  // get data from server
  const { data: todos, isLoading } = useGetTodosQuery(undefined);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl  p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {todos?.data?.map((item) => (
            <TodoCard {...item} key={item._id} />
          ))}
          {/* <div className="bg-white p-5 text-2xl font-bold flex justify-center items-center rounded-md">
          <p>There is no task pending</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
