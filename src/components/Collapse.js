import React from "react";

class Collapse extends React.Component {
  constructor() {
    super();
    this.state = {
      showContent: false,
    };
    // console.log(this);
    // this.showMore = () => {
    //   console.log(this);
    //   this.setState({ showContent: true });
    // };
    // this.showMore = this.showMore.bind(this);
  }

  // showMore() {
  //   this.setState({ showContent: true });
  //   console.log(this);
  // }

  showMore = () => {
    console.log(this);
  };
  render() {
    // console.log(this);
    return (
      <div>
        <button className="btn btn-primary w-100" onClick={this.showMore}>
          Link with href
        </button>
        {this.state.showContent ? (
          <div className="collapse show ">
            {this.props.children}
            {/* {this.state.showContent} */}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Collapse;
