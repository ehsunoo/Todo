import Head from "next/head";
import TodoApp from "../components/TodoApp";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Todo List With Redux and Material UI</title>
        <meta name="description" content="Todo List app" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TodoApp />
    </div>
  );
}
