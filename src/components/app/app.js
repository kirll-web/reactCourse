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
        {id: 1, rise: true, name: 'Kirill', salary: 132234, increase: true},
        {id: 2, rise: false, name: 'Masha', salary: 122353, increase: false},
        {id: 3, rise: false, name: 'John', salary: 2323, increase: false},
        {id: 4, rise: false, name: 'Slava', salary: 3223232, increase: false},
        {id: 5, rise: false, name: 'Elkin', salary: 122232353, increase: false},
        {id: 6, rise: false, name: 'Bis', salary: 1, increase: false}
      ],
      term: '',
      filter: 'all',
      maxId: 6
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
        salary: Number(salary),
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

  onToggleProp = (id, prop) => {
      this.setState(({data}) => ({
        data: data.map(item => {
          return item.id === id ? {...item, [prop]: !item[prop]} : item;
        })
      }))
  }

  searchEmp = (items, term) => {
    if (term.length === 0 ) {
      return items;
    }

    return items.filter(item => {
      return item.name.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1;
    })
  }

  filterEmp = (items, filter2) => {
    
    if (filter2.length === 0 ) {
      return items;
    }

    switch(filter2) {
      case 'rise':
        console.log(filter2);
        return items.filter(item => item.rise)
      case 'bigSalary':
        console.log(items);
        return items.filter(item => Number(item.salary) > 1000)
      default: 
        console.log(filter2);
        return items;
    }
  }

  onUpdateSearch = (term) => {
    this.setState({term: term})
    //this.setState({term})// сокращённая запись объектов
  }

  onUpdateFilter = (filter) => {
    this.setState({filter: filter})
    //this.setState({term})// сокращённая запись объектов
  }

  render() {
    const {data, term, filter} = this.state;
    const visibleData = this.filterEmp(this.searchEmp(data, term), filter);

    return (
      <div className="app">
        <AppInfo 
          numberOfEmployees = {data.length}
          increaseOfEmployees = {data.filter(emp => emp.increase).length} 
        />
        <div className="search-panel">
          <SearchPanel onUpdateSearch = {this.onUpdateSearch} />
          <AppFilter filter={filter} onUpdateFilter = {this.onUpdateFilter}/>
        </div>
        <EmployeesList
          data = {visibleData}
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