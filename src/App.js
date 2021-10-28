import "./styles.css";
import { data } from "./data";
import { Card } from "./components/Card";

export default function App() {
  return (
    <div className="App">
      {data.map((item, index) => {
        return <Card key={index} {...item} />;
      })}
    </div>
  );
}
