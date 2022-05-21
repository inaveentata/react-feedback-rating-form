import React, { Component, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoContext = createContext();

class Context extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      id: uuidv4(),
      rating: "rating",
      task: "",
      editTask: false,
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.task && !isNaN(this.state.rating)) {
      const newItem = {
        id: this.state.id,
        task: this.state.task,
        rating: this.state.rating,
      };
      this.setState({
        items: [...this.state.items, newItem],
        id: uuidv4(),
      });
      this.setState({ task: "", rating: "rating" ,editTask:false});
    } else {
      alert("Missed Something! Please select rating or input field");
    }
  };
  handleEdit = (id) => {
    const { items } = this.state;
    const sortedItems = items.filter((item) => item.id !== id);
    const editItem = items.find((item) => item.id === id);
    this.setState({
      items: sortedItems,
      id: editItem.id,
      task: editItem.task,
      rating: editItem.rating,
      editTask: true,
    });
  };
  handleDelete = (id) => {
    const sortedItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: sortedItems,
    });
  };

  render() {
    const { items, task, rating,editTask } = this.state;
    const { children } = this.props;
    return (
      <TodoContext.Provider
        value={{
          items,
          task,
          rating,
          editTask,
          handleChange: this.handleChange,
          handleSubmit: this.handleSubmit,
          handleEdit: this.handleEdit,
          handleDelete: this.handleDelete,
        }}
      >
        {children}
      </TodoContext.Provider>
    );
  }
}

export { Context, TodoContext }; //named exports
