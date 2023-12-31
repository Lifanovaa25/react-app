import React, { FC, useState } from "react";
import "./App.css";
import AddPizzaForm from "./components/AddPizzaForm";
import DisplayPizzas from "./components/DisplayPizzas";
import Pizza from "./modals/Pizza";

const App = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]>([]);
  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...pizzasList, newPizza]);
  };
  const updatePizza = (newPizza: Pizza) => {
    setPizzasList(pizzasList.map((pizza)=>(pizza.id === newPizza.id ? newPizza:pizza)));
  };
  // console.log(pizzasList);
  const deletePizza = (id:number)=> {
    const newPizzasList = pizzasList.filter(pizza => pizza.id !== id);
    setPizzasList(newPizzasList);
  }
  return (
    <div className="App">
      <div className="wrap">
        <span className="heading">Наша пиццерия</span>
        <AddPizzaForm addPizza={addPizza} />
        <DisplayPizzas pizzasList={pizzasList}
        deletePizza ={deletePizza}
        updatePizza={updatePizza}/>
      </div>
    </div>
  );
};

export default App;
