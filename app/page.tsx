import styles from "./page.module.css"
import Nav from "./components/Nav";

export default function App() {
  
  return (
    <main className="p-7">
      <Nav />
      <h1 className="text-5xl">{"> Travis Lilleberg"}</h1>
      <div className="max-w-5xl shadow-md shadow-orange-700 mx-auto">
        <div>
          <p>Hey I'm Travis and I'm cool.</p>
        </div>
      </div>
    </main>
  );
}