import { Component } from 'react';
import './app-filter.css'

class AppFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ''
    }
  }

  onUpdateFilter = (e) => {
    const filter = e.target.getAttribute('data-filter');

    this.setState({filter})

    this.props.onUpdateFilter(filter);
  }

  render() {
    return (
      <div className="btn-group">
        <button 
          className="btn btn-light"
          type="button"
          data-filter="allEpm"
          onClick = {(e) => this.onUpdateFilter(e)}>
            Все сотрудники
        </button>
        <button 
          className="btn btn-outline-light"
          type="button"
          data-filter="riseEmp"
          onClick = {(e) => this.onUpdateFilter(e)}>
            На повышение
        </button>
        <button 
          className="btn btn-outline-light"
          type="button"
          data-filter="bigSalaryEmp"
          onClick = {(e) => this.onUpdateFilter(e)}>
            З/П больше 1000$
        </button>
      </div>
    );
  }
}

export default AppFilter;