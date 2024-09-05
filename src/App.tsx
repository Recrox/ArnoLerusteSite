import MyComponent from './components/my-component';
import Posts from './components/post';


const App: React.FC = () => {
  return (
    <div>
      <h1>Bienvenue sur mon site !</h1>
      <MyComponent title='myComponent' content='heyyyy'></MyComponent>
      <Posts />
    </div>
  );
};

export default App;  // Assure-toi que l'exportation par défaut est présente





// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
