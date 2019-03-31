import React, { Component } from "react";
import StackGrid from "react-stack-grid";
import { getImages } from "../services/imageService";
import ReactModal from "./prebuilt/ReactModal";
import CheckboxList from "./CheckboxList";
import Image from "./Image";

import "../styles/homepage.css";

class Homepage extends Component {
  state = {
    images: getImages(),
    viewImage: {
      id: 0,
      url: "",
      name: "",
      description: "",
      commission: false,
      fanart: false,
      mature: false
    },
    filter: { commission: false, fanart: false, mature: true },
    modal: false
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  handleView = image => {
    this.toggle();
    this.setState({ viewImage: image });
  };

  filterImages = () => {
    let images = this.state.images;
    let filter = this.state.filter;

    for (var key in filter) {
      if (filter[key] === true) {
        let filterImages = images.filter(image => image[key] !== false);
        return filterImages;
      } else {
        return images;
      }
    }
  };

  handleCheckboxChange = name => {
    let filter = this.state.filter;
    for (var key in filter) {
      if (key === name) {
        filter[key] = !filter[key];
      }
    }
    this.setState({ filter });
  };

  render() {
    let images = this.filterImages();
    console.log(this.state.filter);
    return (
      <React.Fragment>
        <CheckboxList
          checkboxObj={this.state.filter}
          onCheckboxChange={this.handleCheckboxChange}
        />
        <StackGrid className="hover" columnWidth={"30%"}>
          {images.map(image => (
            <Image image={image} onView={this.handleView} key={image.id} />
          ))}
        </StackGrid>
        <ReactModal
          image={this.state.viewImage}
          modal={this.state.modal}
          onToggle={this.toggle}
        />
      </React.Fragment>
    );
  }
}

export default Homepage;