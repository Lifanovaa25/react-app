import React, { FC, useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import Pizza from "../modals/Pizza";
import EditPizzaForm from "./EditPizzaForm";
import { CSSTransition } from "react-transition-group";

interface SinglePizzaProps {
  pizza: Pizza;
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: number) => void;
}
const SinglePizza: FC<SinglePizzaProps> = ({
  pizza,
  updatePizza,
  deletePizza,
}) => {
  const [edit, setEdit] = useState<boolean>(false);
  const handleToggleEdit = () => {
    setEdit(!edit);
  };
  const handleDelete = () => {
    deletePizza(pizza.id);
  };
  return (
    <CSSTransition
      in={true}
      className="alert pizza"
      timeout={500}
      unmountOnExit
    >
      <div className="pizza">
        <img src={`/images/${pizza.img}`} alt={pizza.title} />
        <h2>{pizza.title}</h2>
        <span>{pizza.price}</span>
        <div className="pizza-controls">
          <AiFillEdit onClick={handleToggleEdit} />
          <AiFillDelete onClick={handleDelete} />
        </div>
        {edit ? (
          <EditPizzaForm
            data={pizza}
            handleToggleEdit={handleToggleEdit}
            updatePizza={updatePizza}
          />
        ) : null}
      </div>
    </CSSTransition>
  );
};

export default SinglePizza;
