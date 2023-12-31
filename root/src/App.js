import {Component} from "react";
import TodoList from "./TodoList";


const date1 = new Date(2021, 7, 19, 14, 5);
const date2 = new Date(2021, 7, 19, 15, 23);

const initialData = [{
  title: 'Изучить React',
  desc: 'Да поскорее',
  image: '',
  done: true,
  createAt: date1.toLocaleString(),
  key: date1.getDate()
},
{
  title: 'Написать первое React-приложение',
  desc: 'Да поскорее',
  image: '',
  done: true,
  createAt: date2.toLocaleString(),
  key: date2.getDate()
}
];

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {data: initialData}
    this.setDone = this.setDone.bind(this);
    this.delete = this.delete.bind(this);
  }


  setDone(key) {
    const deed = this.state.data.find((current) => current.key === key);
    if (deed)
      deed.done = true;
    this.setState((state) => ({}));
  }

  delete(key) {
    const newData = this.state.data.filter(
        (current) => current.key !== key
    );
    this.setDone((state) => ({data: newData}) );
  }


  render() {
    return (
      <div>
        <nav className="navbar is-light">
          <div className="navbar-brand">
            <span className="navbar-item is-uppercase">
              Todos
            </span>
          </div>
        </nav>
        <main className="content px-6 mt-6">
          <TodoList list={this.state.data}
                    setDone={this.setDone}
                    delete={this.delete}
          />
        </main>
      </div >
    );
  }
}