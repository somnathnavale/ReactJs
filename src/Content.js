import ItemList from './ItemList';

const Content = ({items,handleCheck,handleDelete,search}) => {
    return (
    <main className="content">
    {
        items.length>0 ?
        (
            <ItemList
                items={items}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />
        ):(
            <p style={{marginTop:'20px',color:'red',fontWeight:'600'}}> {search.length>0 ? 'search item not found' :'List is Empty'}</p>
        )}
    </main>
)
}
export default Content;