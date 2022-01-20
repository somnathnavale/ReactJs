import ItemList from './ItemList';

const Content = ({items,handleCheck,handleDelete,search,isLoading}) => {
    return (
    <>
        {
            items.length>0 ?
            (
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ):(
                <p style={{marginTop:'20px',color:'red',fontWeight:'600'}}> {isLoading ?("Loading items....") : ((search.length>0 ? 'search item not found' :'List is Empty'))}</p>
            )
        }
        
    </>
)
}
export default Content;