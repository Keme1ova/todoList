// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  const [todoListData, setTodoListsData] = useState(
    JSON.parse(localStorage.getItem("todoListData")) || []
  );

  const sumStatus = todoListData.reduce(
    (accumulator, currentValue) => accumulator + currentValue.status,
    0
  );
  console.log(todoListData);

  useEffect(() => {
    localStorage.setItem("todoListData", JSON.stringify(todoListData));
  }, [todoListData]);

  const addTodo = (value) => {
    setTodoListsData([
      ...todoListData,
      { id: Date.now(), list: value, status: false },
    ]);
  };

  const deleteTodo = (id) => {
    const deleted = todoListData.filter((el) => {
      return el.id !== id;
    });
    setTodoListsData(deleted);
  };

  const statusChange = (id) => {
    const status = todoListData.map((el) => {
      if (el.id === id) {
        return { ...el, status: !el.status };
      }
      return el;
    });
    setTodoListsData(status);
  };

  const editTodo = (id, newText) =>{
    const edit = todoListData.map((el)=>{
      if(el.id === id){
        return{...el, list: newText}
      }
      return el
    })
    setTodoListsData(edit)
  }
  return (
    <div className="App">
      <div>
        <Header todoListData={todoListData} sumStatus={sumStatus} />
        <Main
          todoListData={todoListData}
          addTodo={addTodo}
          deleteTodo={deleteTodo}
          statusChange = {statusChange}
          editTodo = {editTodo}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
