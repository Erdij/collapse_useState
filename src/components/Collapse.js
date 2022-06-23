// ilk constructor --> state initialization
// render methodu ilk defa çalıştı.
// onClick event ı çalıştı
// setState ,state nesnesini güncelledi -->  triggered render **render methodunu yeniden çalıştırmış oldu.
// render metodu güncel JSX i sayfada gösteriyor.
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
    this.setState({ showContent: !this.state.showContent });
  };
  render() {
    // console.log(this);
    return (
      <div>
        <button className="btn btn-primary w-100" onClick={this.showMore}>
          {/* {this.props.children.props.cardTitle} */}
          {React.Children.map(
            this.props.children,
            (children) => children.props.cardTitle
          )}
        </button>
        {this.state.showContent ? (
          <div className="collapse show ">
            {/* {this.props.children} */}
            {/* {this.state.showContent} */}
            {React.Children.map(this.props.children, (children) => children)}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Collapse;
