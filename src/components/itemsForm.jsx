function ItemsForm({handleSubmit}){
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="text" placeholder="write some tapa"></input>
            <button type="submit">submit</button>
        </form>
    )
}

export default ItemsForm