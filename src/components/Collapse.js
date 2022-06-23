import React from "react";

class Collapse extends React.Component {
  constructor() {
    super();
    this.state = {
      showContent: false,
    };
  }
  render() {
    return (
      <div>
        <a className="btn btn-primary w-100">Link with href</a>
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
