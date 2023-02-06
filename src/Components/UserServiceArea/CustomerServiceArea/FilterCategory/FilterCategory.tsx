import "./FilterCategory.css";

function FilterCategory(props: { filterValueSelected: (arg0: any) => void; }): JSX.Element {
    function onCategoryValueChange(event: { target: { value: any; }; }) {
        props.filterValueSelected(event.target.value);
    }
    return (
        <div className="FilterCategory">
            <select name="Category" onChange={onCategoryValueChange}>
                <option value="">Filter by category</option>
                <option value="All">All</option>
                <option value="FOOD">Food</option>
                <option value="ELECTRICITY">Electricity</option>
                <option value="RESTAURANT">Restaurant</option>
                <option value="VACATION">Vacation</option>
            </select>
        </div>
    );
}

export default FilterCategory;
