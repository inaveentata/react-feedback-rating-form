import { useContext } from "react";
import { TodoContext } from "./Context";
const InputForm = () => {
  const {rating, task,editTask, handleChange, handleSubmit } = useContext(TodoContext);
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <select name="rating" id="" className="num-input" value={rating}onChange={handleChange} >
          <option value="rating">Rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <input
          type="text"
          name="task"
          className="text-input"
          placeholder="Start type over here, your feedback!"
          value={task}
          onChange={handleChange}
        />
      </div>
      <button className={`${editTask?'btn-edit':'btn-send'}`} type="submit">{editTask?'Edit':'Send' }</button>
    </form>
  );
};

export default InputForm;
