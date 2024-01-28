import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';

function App() {
  return (
    <>
      <>
        <h1>props</h1>
        <MyComponent name="React" favoriteNum={7}>React</MyComponent>
        <hr></hr>
      </>

      <>
        <h1>state</h1>
        <Counter />
        <hr></hr>
      </>

      <>
        <h1>useState</h1>
        <Say />
      </>

    </>
  );

}

export default App;
