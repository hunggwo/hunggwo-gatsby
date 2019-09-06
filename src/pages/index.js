
// import { Link } from "gatsby"
import React, { Component } from "react";
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"


import Photos from "../components/photos";
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
        <Jumbotron item={this.state.selectItem} items={this.state.items} handleClick={this.handleClick}/>
        <Photos item={this.state.selectItem} />
        {/* <FooterComp></FooterComp> */}
        {/* <MailIcon></MailIcon> */}
      </Layout>
      
    );
  }
}
export default IndexPage
