import  Header  from './Header';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from 'react';
// import ColorChallenge from './ColorChallenge';

function App() {
  const API_URL="http://localhost:3500/items"

  const [items,setItems]=useState(JSON.parse(localStorage.getItem('shoppingList')) || []);
  const [newItem,setNewItem]=useState('');
  const [search,setSearch]=useState('');
 
  // const [color,setColor]=useState('');
  // const [toggle,setToggle]=useState(true);

  useEffect(()=>{
    localStorage.setItem('shoppingList',JSON.stringify(items));
  },[items]) 
  
  const addItem=(item)=>{
    const id=items.length ?items[items.length-1].id+1:1;
    const mynewItem={
      id,checked:false,item
    }
    const listItems=[...items,mynewItem];
    setItems(listItems);
  }

  const handleCheck=(id)=>{
      const listItems=items.map((item)=>{
          return (item.id!==id ? item:{...item ,checked:!item.checked}); 
      })
      setItems(listItems);  
  }

  const handleDelete=(id)=>{
      const listItems=items.filter((item)=>{
          return(item.id!==id);
      });
      setItems(listItems);  
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem);
    setNewItem('');
  }
  return (
    <div className='App'>
      <Header title="Groceries" />
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <Content
        items={items.filter((item)=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        search={search}
      />
      
      {/* <ColorChallenge
        color={color}
        setColor={setColor}
        toggle={toggle}
        setToggle={setToggle}
       /> */}
      <Footer year="2022" />
    </div>
  );
}

export default App;
