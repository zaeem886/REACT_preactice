import PropTypes from "prop-types";
function List({category = "items", items = []}) {

    //     //   friuts.sort((a,b) => a.name.localeCompare (b.name));
    //     //   friuts.sort((a,b) => b.name.localeCompare (a.name));
    // friuts.sort((a,b) => a.calories - b.calories);//reverse order

    // friuts.sort((a,b) => b.calories - a.calories);// corerct order
    // const lowcalfriuts= friuts.filter(friut=> friut.calories<100);
    //  const highcalories= friuts.filter(friut=> friut.calories>100);


    // const listitems=lowcalfriuts.map(lowcalfriut=> <li key={lowcalfriut.id}>
    //                 {lowcalfriut.name}: &nbsp;<b>{lowcalfriut.calories}</b></li>)
    // return(<ol>{listitems}</ol>);

    // const listitems=highcalories.map(highcalorie=> <li key={highcalorie.id}>
    //                 {highcalorie.name}: &nbsp;<b>{highcalorie.calories}</b></li>)
    // return(<ol>{listitems}</ol>);


    const listitems = items.map(item => <li key={item.id}>
        {item.name}: &nbsp;<b>{item.calories}</b></li>)
    return (<><h3 className="category">{category}</h3>
        <ol className="list-items">{listitems}</ol></>);


}

List.defaultProps = {
    category: 'items',
    items: [],
}


List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        calories: PropTypes.number.isRequired
    })).isRequired
}

export default List;


