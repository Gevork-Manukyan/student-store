import './FilterInput.css';


function FilterInput () {
    return (
        <div className="FilterInput">
            <input type="text" placeholder="Search" />
            <i className="material-icons md-24">search</i>
        </div>
    )
}

export default FilterInput;