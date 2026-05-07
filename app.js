// const header = React.createElement('h1', {}, "Hello world from React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(header);
/******* create nested element
 *  <div id='parent'>
 *      <div id=child>
 *          <h1>I am h1 tage</h1>
 *       </div>
 *  </div>
 * 
 */

// const parent = React.createElement('div',
//     {id:'parent'},
//     React.createElement('div',
//     {id:'child'},
//     React.createElement('h1',{},"I am h1 tag")) 
// ) 

// console.log(parent);
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent);

const parent = React.createElement(
    'div',
    {id:'parent'},[
    React.createElement('div', {id:'child'},[
        React.createElement('h1',{},"I am h1 tag"),
        React.createElement('h2',{},"I am h2 tag")
    ]),
        React.createElement('div', {id:'child'},[
        React.createElement('h1',{},"I am h1 tag"),
        React.createElement('h2',{},"I am h2 tag")
    ]) ] 
) 

console.log(parent);
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
