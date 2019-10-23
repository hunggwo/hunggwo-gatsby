
// import { Link } from "gatsby"
import React, { Component } from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Jumbotron from "../components/jumbotron";
import items from "../components/items";

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: items,
      selectItem: items[0],  
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(item) {
    this.setState({ selectItem: item });
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        
        <p style={{ textAlign: `center`, fontSize: '1.2rem'}}>我們提供多項服務、客製化產品，請點擊照片觀看更多實際案例</p>
        <Jumbotron item={this.state.selectItem} items={this.state.items} handleClick={this.handleClick}/>
      </Layout>
      
    );
  }
}
export default IndexPage
