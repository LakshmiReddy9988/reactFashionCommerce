import React, { useState } from "react";
import SideNav from "../SideNav";
import Products from "../ProductsComponent/ProductsComponent";
import CategoriesContext from "../../Context/CategoriesContext";

//violation of separation of concerns
//redux, mobx,context
function MainComponent() {
  const [sortKey, setSortKey] = useState("");

  //prop drilling + state in the main component =>to manage component usage
  let [showProducts, setShowProducts] = useState(false);
  let [newVar, setNewVar] = useState(0);
  //newVar=2
  //setNewVar(2);
  let [cartCount, setCartCount] = useState(0);
  let [numberOfProducts, setNumberOfProducts] = useState(10);
  //numberOfProducts.initialValue

  let setMainComponentVariable = function (valueOfNewVar) {
    console.log(
      "Setting the value of state variable new Var to:",
      valueOfNewVar
    );
    setNewVar(valueOfNewVar);
  };

  /*
          <CategoriesContext.Provider value={{value1:"1",mobiles:["mobile1","mobile2","mobile3"],watches:["watch1","watch2","watch3","watch4"]}} >
 
    </CategoriesContext.Provider>

  */
  return (
    <div className="container-fluid">
      <CategoriesContext.Provider
        value={{
          value1: "1",
          mobiles: ["mobile1", "mobile2", "mobile3"],
          watches: ["watch1", "watch2", "watch3", "watch4"],
        }}
      >
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-5">
            <p> value of newVar in main component:{newVar}</p>
            <SideNav
              setSortKey={setSortKey}
              setNumberOfProducts={setNumberOfProducts}
              showProducts={showProducts}
              setShowProducts={setShowProducts}
            />
          </div>
          <div className="col-lg-9 col-md-8 col-sm-7">
            <Products
              sortKey={sortKey}
              typeOfProducts={"clothes"}
              numberOfProducts={numberOfProducts}
              showProducts={showProducts}
              changeMainComponentVariable={setNewVar}
            />
          </div>
        </div>
      </CategoriesContext.Provider>
    </div>
  );
}

export default MainComponent;
