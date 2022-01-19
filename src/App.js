import  Header  from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  return (
    <div className='App'>
      <Header title="Groceries" />
      <Content />
      <Footer year="2022" />
    </div>
  );
}

export default App;
