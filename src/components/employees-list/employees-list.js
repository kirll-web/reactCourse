import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css'

const EmployeesList = ({data, onDelete, onToggleProp}) => {

  const elems = data.map(item => {
    const {id, ...itemProps} = item;
    console.log(id);
    return( 
      <EmployeesListItem
      key={id}
      {...itemProps}
      onDelete={() => onDelete(id)}
      onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
      />
    )
  });

  return (
    <ul className="app-list list-group">
      {elems}
    </ul>
  );
}

export default EmployeesList;