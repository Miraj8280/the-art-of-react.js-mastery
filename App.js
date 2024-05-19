/* 
    <div id="parent">
        <div id="child">
            <h1>Miraj Asraf</h1>
        </div>
    </div>

*/
/* 
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Miraj Asraf")
  )
);
 */

/*  
    <div id="parent">
        <div id="child">
            <h1>Miraj Asraf</h1>
            <p>Pursuing B.Tech from JGEC</p>
        </div>
    </div>
*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Miraj Asraf"),
    React.createElement("p", {}, "Pursuing B.Tech from JGEC"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
