import { useState } from "react";
import cx from "classnames";
import styles from '../styles/Home.module.css';

const Home = () => {
  const [todoItem, setTodoItems] = useState("");
  const [items, setItems] = useState([
    {
      id: 1,
      text: "Learn React",
      done: false
    }
  ]);

const handleEnter = (e) => {
  if(e.key === "Enter") {
    handleAdd();
  }
}

const handleAdd = () => {
  if(todoItem) {
    setItems([{
      id: items.length + 1,
      text: todoItem,
      done: false
    }, ...items]);
    setTodoItems("");
  }
};

const handleToggle = (id) => {
  const _items = items.map((item) => {
    if(item.id === id) {
      return {
        ...item,
        done: !item.done
      }
    }
    return item;
  })

  setItems(_items);
}

  return (
    <div className="w-3/4 mx-auto text-center">
      <div className="pt-12">
        <h1 className="text-5xl">Toda</h1>
      </div>
      <div className="pt-12">
        <input type="text" className="text-gray-900 px-4 py-2 text-center w-full rounded" value={todoItem} onChange={(e) => setTodoItems(e.target.value)} onKeyDown={handleEnter}/>
      </div>
      <ul className="pt-12">
        {
          items.filter(({done}) => !done).map(({ id, text, done }) => (
              <li key={id} onClick={() => handleToggle(id)} className={cx(styles.item)}>{text}</li>
          ))
        }
        {
          items.filter(({done}) => done).map(({ id, text, done }) => (
              <li key={id} onClick={() => handleToggle(id)} className={cx(styles.item, styles.done)}>{text}</li>
          ))
        }
      </ul>
    </div>
  )
}
export default Home;