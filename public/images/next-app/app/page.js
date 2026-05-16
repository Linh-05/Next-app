import Image from "next/image";
import "./page.css";

export default function Home() {
    const todos = [
      {
        id : 1,
        name : "Ăn sáng"
      },
      {
        id: 2,
        name : "Học bài"
      },
    ]; 
  return (
    <div>
      <main>
        {
          todos.map(function(todo) {
            return <div key = {todo.id}>
              <h1>{todo.name}</h1>
            </div>
          })
        }
      </main>
    </div>
  );
}
