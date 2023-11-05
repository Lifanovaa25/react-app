import React, { FC, useState } from "react";
import Pizza from "../modals/Pizza";
import SinglePizza from "../components/SinglePizza";
import { CSSTransition } from "react-transition-group";

interface DisplayPizzasProps {
  pizzasList: Pizza[];
}
const DisplayPizzas: FC<DisplayPizzasProps> = ({ pizzasList }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="container">
      {pizzasList.map((pizza) => {
        return (
        <CSSTransition in={true} timeout={500} unmountOnExit>
        <SinglePizza key={pizza.id} pizza={pizza} />
        </CSSTransition>);
      })}
    </div>
  );
};

export default DisplayPizzas;
