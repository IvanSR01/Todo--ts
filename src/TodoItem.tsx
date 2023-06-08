import React from "react";
import { ITodo } from "./types/data";
import { motion, AnimatePresence } from "framer-motion";
interface ITodoItem extends ITodo {
  removeTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = ({
  complete,
  title,
  id,
  removeTodo,
}) => {
  return (
    <AnimatePresence >
      <motion.div
        initial={{ opacity: 0, y: "100px" }}
        whileInView={{ opacity: 1, y: "0px" }}
        exit={{ opacity: 0, y: "-100px" }}
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
        className={`item ${complete ? "complete" : ""}`}
      >
        <p>{title}</p>
        <button onClick={() => removeTodo(id)}>Complete</button>
      </motion.div>
    </AnimatePresence>
  );
};

export default TodoItem;
