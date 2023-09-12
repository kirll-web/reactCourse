import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css'

function App() {
  const data = [
    {name: 'Kirill', surname: 'Dikov', salary: '132234', increase: true},
    {name: 'Masha', surname: 'Tolmacheva', salary: '122353', increase: false}
  ];
  return (
    <div className="app">

      <AppInfo/>
      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>
      <EmployeesList data={data}/>
      <EmployeesAddForm/>
      
    </div>
  )
}

export default App;
//!Урок по свойствам(пропсам)
// function WhoAmI(props) { // props — объект с аргументами, даже если мы его не передаём, он все равно будет существовать. Можно также деструктуризировать {name, surname, link}. Поменять внутри не можем, только читать
//   return(
//     <div>
//       <h1>My name is {props.name}, surname — {props.name}</h1>
//       <a href="{props.link}">My profile</a>
//     </div>
//   )
// }

// <WhoAmI name="John" surname ="Smith" link="vk.com"/>