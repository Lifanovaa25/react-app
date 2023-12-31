import React, { FC, useState } from "react";
import Pizza from "../modals/Pizza";
import SinglePizza from "../components/SinglePizza";
import { CSSTransition } from "react-transition-group";

interface DisplayPizzasProps {
  pizzasList: Pizza[];
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: number) => void;
}
const DisplayPizzas: FC<DisplayPizzasProps> = ({
  pizzasList,
  updatePizza,
  deletePizza,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="container">
      {pizzasList.map((pizza) => {
        return (
          <CSSTransition
            in={true}
            className="alert"
            timeout={500}
            unmountOnExit
          >
            <SinglePizza
              key={pizza.id}
              updatePizza={updatePizza}
              deletePizza={deletePizza}
              pizza={pizza}
            />
          </CSSTransition>
        );
      })}
    </div>
  );
};

export default DisplayPizzas;
