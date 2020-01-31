import React, { Component } from 'react';
import axios from 'axios';

class AddCategories extends Component{
  constructor(props){
      super(props);
      this.state={
        text: '',
        parentCategory: null
      }
      this.addItem = this.addItem.bind(this)
  } 

  addItem() {
    let text = this.state.text;
    let parentCategory = this.state.parentCategory === '0' ? null : this.state.parentCategory;
    this.props.categoriesinfo({name:text, parent_category: parentCategory});
    this.setState({
      text:'',
      parentCategory: null

    })
    
  }

  render(){
      return(
          <div className=''>
               <div className='form'>
                  <input type='text'  value={this.state.text} onChange={(event) =>
                     this.setState({text:event.target.value})} placeholder='Enter category name..'/>
                     <select onChange={(event) =>this.setState({parentCategory:event.target.value})}>
                       <option value="0">Select a parent category</option>
                       {this.props.categories.map((item, index) => (
                         <option key={index} value={item.id}>{item.name}</option>
                       ))}
                     </select>
                  <button onClick={this.addItem}>Add</button>
               </div>
          </div>
      )
  }
}


class Categories extends Component {
  constructor(props){
    super(props);
    this.state={

      categories:[]
    }
    this.addCategories = this.addCategories.bind(this);
    this.refreshList = this.refreshList.bind(this);
  }

  addCategories(data)
  {
    console.log(data);
    axios.post("http://127.0.0.1:8000/categories/",{name: data.name,parent_category:data.parent_category}).then(res => {
      this.refreshList();
    });

    
  }

  refreshList() {
    axios.get("http://127.0.0.1:8000/categories/")
    .then(res => {
      this.setState({ categories: res.data });
      console.log(res.data);
    });
  }

  componentDidMount() {
    this.refreshList();
  
  }

  render() {
    return (
      <div className="App">
        <AddCategories categoriesinfo={this.addCategories} categories={this.state.categories}/>
        <table >
          <thead>
          <tr className="table-row">
            <th >NAME</th>
            <th>PARENTCATEGORY</th>

           
          </tr> 
          </thead>
          <tbody>
            
            {this.state.categories.map((item,index)=>(
            <tr key={index} >
               
                <td>{item.name}</td>
                <td>{item.parent_category?item.parent_category.name:null}</td>
            
                
                
              </tr>     
          ))}
       </tbody>
       </table>
       
      </div>
    );
  }
}

export default Categories;