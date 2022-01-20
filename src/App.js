import  Header  from './Header';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import apiRequest from './apiRequest';
// import ColorChallenge from './ColorChallenge';

function App() {
  const API_URL="http://localhost:3500/items"

  const [items,setItems]=useState([]);
  const [newItem,setNewItem]=useState('');
  const [search,setSearch]=useState('');
  const [fetchError,setFetchError]=useState(null);
  const [isLoading,setisLoading]=useState(true);

  // const [color,setColor]=useState('');
  // const [toggle,setToggle]=useState(true);

  useEffect(()=>{

    const fetchItems= async ()=>{
      try{
        const response= await fetch(API_URL);
        if(!response.ok) throw Error('Did not receive expected data');
        const listItems= await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch(err){
        setFetchError(err.message);
      }finally{
        setisLoading(false);
      }
    }
    // const data=(async()=>await fetchItems())();   // data is promise
    // console.log(data);  

    fetchItems();                   // as we just does not return any value
   
  },[]) 
  
  const addItem=async(item)=>{
    const id=items.length ?items[items.length-1].id+1:1;
    const myNewItem={
      id,checked:false,item
    }
    const listItems=[...items,myNewItem];
    setItems(listItems);

    const postOptions={
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(myNewItem)
    }
    const result=await apiRequest(API_URL,postOptions);
    if(result) setFetchError(result);
  }

  const handleCheck=async(id)=>{
      const listItems=items.map((item)=>{
          return (item.id!==id ? item:{...item ,checked:!item.checked}); 
      })
      setItems(listItems);  

      const myItem=listItems.filter((item)=>item.id===id);
      const updateOptions={
        method:'PATCH',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({checked:myItem[0].checked})
      }
      const result=await apiRequest(`${API_URL}/${id}`,updateOptions);
      if(result) setFetchError(result);
  }

  const handleDelete=async(id)=>{
      const listItems=items.filter((item)=>{
          return(item.id!==id);
      });
      setItems(listItems); 

      const myItem=listItems.filter((item)=>item.id===id);

      const deleteOptions={method:'DELETE'}
      
      const result=await apiRequest(`${API_URL}/${id}`,deleteOptions);
      if(result) setFetchError(result);

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
      <main className='content'>
        {fetchError ? <p style={{marginTop:"20px",color:"red", fontWeight:"600"}}> {`Error : ${fetchError}`} </p>
          :<Content
            items={items.filter((item)=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            search={search}
            isLoading={isLoading}
          />
        }
      </main>
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
