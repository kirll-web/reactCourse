import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css'

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id: 1, rise: true, name: 'Kirill', salary: '132234', increase: true},
        {id: 2, rise: false, name: 'Masha', salary: '122353', increase: false}
      ],
      maxId: 2
    };
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  };

  addItem = (employees) => {
    const {name, salary} = employees;
    this.setState(() => {
      const newEmployees = {
        name: name,
        salary: salary,
        rise: false,
        id: this.state.maxId + 1,
        increase: false
      };

      const newData = [...this.state.data];
      newData.push(newEmployees);

      return {
        data: newData,
        maxId: newEmployees.id
      }
    })
  }

  // onToggleIncrease = (id) => {
  //   // this.setState(({data}) => {
  //   //   const index = data.findIndex(elem => elem.id === id),
  //   //         old = data[index],
  //   //         newItem =  {...old, increase: !old.increase},
  //   //         newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];
      
  //   //   return {
  //   //     data: newArr
  //   //   }

      
  //   // })

  //   this.setState(({data}) => ({
  //     data: data.map(item => {
  //       return item.id === id ? {...item, increase: !item.increase} : item;
  //     })
  //   }))
  // }

  // onToggleRise = (id) => {
  //   this.setState(({data}) => ({
  //     data: data.map(item => {
  //       return item.id === id ? {...item, rise: !item.rise} : item;
  //     })
  //   }))
  // }

  onToggleProp = (id, prop) => {
      this.setState(({data}) => ({
        data: data.map(item => {
          return item.id === id ? {...item, [prop]: !item[prop]} : item;
        })
      }))
    }

  render() {
    return (
      <div className="app">
        <AppInfo 
          numberOfEmployees = {this.state.data.length}
          increaseOfEmployees = {this.state.data.filter(emp => emp.increase).length} 
        />
        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>
        <EmployeesList
          data = {this.state.data}
          onDelete = {this.deleteItem}
          onToggleProp = {this.onToggleProp}
        />
        <EmployeesAddForm 
          onAdd = {this.addItem}
        />
      </div>
    )
  }
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