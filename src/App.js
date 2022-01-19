import  Header  from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [items,setItems]=useState([
      {
          id:1,
          checked:false,
          item:"half pound bag of almonds"
      },
      {
          id:2,
          checked:false,
          item:"Rice"
      },
      {
          id:3,
          checked:false,
          item:"Butter"
      }
  ]);
  const handleCheck=(id)=>{
      const listItems=items.map((item)=>{
          return (item.id!==id ? item:{...item ,checked:!item.checked}); 
      })
      setItems(listItems);
      localStorage.setItem('shoppingList',JSON.stringify(listItems));
  }

  const handleDelete=(id)=>{
      const listItems=items.filter((item)=>{
          return(item.id!==id);
      });
      setItems(listItems);
      localStorage.setItem('shopping',JSON.stringify(listItems));
  }

  return (
    <div className='App'>
      <Header title="groceries" />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer year="2022" />
    </div>
  );
}

export default App;
