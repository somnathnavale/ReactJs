import ItemList from './ItemList';

const Content = ({items,handleCheck,handleDelete}) => {
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
            <p style={{marginTop:'20px'}}> List is Empty</p>
        )}
    </main>
)
}
export default Content;