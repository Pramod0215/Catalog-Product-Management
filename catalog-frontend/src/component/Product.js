import React, { Component } from 'react';
import axios from "axios";
import Brand from './Brand'
import Categories from './categories';

class AddPorduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      brand: [],
      particularBrand: "",
      category: [],
      particularCategories: "",
      specification: [],
      unit: '',
      key: '',
      value: ''
    }
    this.addItems = this.addItems.bind(this)
    this.brandRefreshList = this.brandRefreshList.bind(this)
    this.categoryRefreshList = this.categoryRefreshList.bind(this)
    this.addSpecification = this.addSpecification.bind(this)
  }

  addItems() {
    let text = this.state.name;
    let brandName = this.state.particularBrand;
    let categoryName = this.state.particularCategories;
    let specified = this.state.specification;
    console.log("additems", text, brandName, categoryName, specified)
    this.props.productinfo({ name: text, brand: brandName, category: categoryName, specification: specified });
    this.setState({
      name: '',
      brand: '',
      category: null,
      specification: []

    })

  }

  brandRefreshList() {
    axios.get("http://127.0.0.1:8000/brand/")
      .then(res => {
        this.setState({ brand: res.data });
        console.log("brand name", res.data);
      });
  }

  categoryRefreshList() {
    axios.get("http://127.0.0.1:8000/categories/")
      .then(res => {
        this.setState({ category: res.data });
        console.log("categories name", res.data);
      });
  }

  componentDidMount() {
    this.brandRefreshList();
    this.categoryRefreshList();

  }

  addSpecification() {
    let key = this.state.key;
    let value = this.state.value;
    let unit = this.state.unit;
    const specification = [...this.state.specification, { key: key, value: value, unit: unit }]
    console.log("specifications", key, value, unit, specification);
    this.setState(
      {
        specification: specification,
        key: "",
        value: "",
        unit: ""
      }
    )

  }



  render() {
    // console.log(this.props.product);
    return (
      <div className='product-App'>
        <div className='form-content'>
          <div className='form'>
            <input type='text' onChange={(event) => this.setState({ name: event.target.value })} placeholder='Enter The Product Name...' value={this.state.name} />
            <select onChange={(event) => this.setState({ particularBrand: event.target.value })}>
              <option value="0">Select a  Brand</option>
              {this.state.brand ? this.state.brand.map((items, index) => (
                <option key={index} value={items.id}>{items.name}</option>

              )) : null}
            </select>

            <select onChange={(event) => this.setState({ particularCategories: event.target.value })}>
              <option value="0">Select a category</option>
              {this.state.category ? this.state.category.map((items, index) => (
                <option key={index} value={items.id}>{items.name}</option>
              )) : null}
            </select>
          </div>
          <div>
            Specificetion
                      <form>
              <input type='text' onChange={(event) => this.setState({ key: event.target.value })} placeholder='Enter The key ...' value={this.state.key} />
              <input type='text' onChange={(event) => this.setState({ value: event.target.value })} placeholder='Enter The value...' value={this.state.value} />
              <input type='text' onChange={(event) => this.setState({ unit: event.target.value })} placeholder='Enter The units...' value={this.state.unit} />
              <button onClick={this.addSpecification}>Add </button>
            </form></div>


          <button onClick={this.addItems}>Submit</button>

        </div>
      </div>
    )
  }
}

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {

      product: []
    }
    this.refreshList = this.refreshList.bind(this);
    this.addProduct = this.addProduct.bind(this);
  }

  addProduct(data) {
    console.log(data);
    console.log(data)
    axios.post("http://127.0.0.1:8000/product/", { name: data.name, brand: data.brand, category: data.category, specification: data.specification }).then(res => {
      this.refreshList();
    });


  }



  refreshList() {
    axios.get("http://127.0.0.1:8000/product/")
      .then(res => {
        this.setState({ product: res.data });
        console.log(res.data);
      });
  }

  componentDidMount() {
    this.refreshList();

  }

  render() {
    return (
      <div className="App">
        <AddPorduct productinfo={this.addProduct} />

        <table >
          <thead>
            <tr className="table-row">
              <th >NAME</th>
              <th >BRAND</th>
              <th>CATEGORY</th>
              <th >SPECIFICATION</th>

            </tr>
          </thead>
          <tbody>

            {this.state.product.map((item, index) => (
              <tr key={index} >
                {console.log(item)}
                <td>{item.name}</td>
                <td>{item.brand.name}</td>
                <td>{item.category.name}</td>

                <td>
                  <ul>
                   {item.specification.map((item,index)=>
                   (<ol key={index}>
                     {console.log("specification: ", item.key,)}
                     {item.key}{item.value}{item.unit}
                   </ol>))}
                  </ul>
                
                </td>
              </tr>
            ))}
          </tbody>
        </table>



      </div>
    );
  }
}

export default Product;