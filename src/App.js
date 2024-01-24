import "./index.css";

const ListItem = [
  {
    id: 1,
    title: "makan",
    done: true,
  },
  {
    id: 2,
    title: "minum",
    done: false,
  },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <Checklist />
      <Stats />
    </div>
  );
}

function Logo() {
  return <span className="logo">Gocek</span>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>Tambahkan Task Kamu</h3>
    </div>
  );
}

function Checklist() {
  return (
    <div className="list">
      <ul>
        {ListItem.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item }) {
  return (
    <li>
      <input type="checkbox" name="" id="" />
      <span style={{ textDecoration: item.done ? "line-through" : "" }}>
        {item.title}
      </span>
      <button>X</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <span>Kamun punya X catatan dan X yang belum diselesaikan (X%)</span>
    </footer>
  );
}

export default App;
