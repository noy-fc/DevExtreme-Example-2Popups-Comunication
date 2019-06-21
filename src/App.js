import React, { Component } from "react";
// import Form, { SimpleItem, ButtonItem, Label } from "devextreme-react/form";
import { Button } from "devextreme-react";
// import { users } from "./data";
import { Popup } from "devextreme-react/popup";
import Popup1 from "./Popup1";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popupVisible: false
    };
    this.showInfo = this.showInfo.bind(this);
    this.hideInfo = this.hideInfo.bind(this);
  }
  showInfo() {
    this.setState({
      popupVisible: true
    });
  }
  hideInfo() {
    this.setState({
      popupVisible: false
    });
  }
  render() {
    return (
      <div>
        <Button text={"Open"} onClick={this.showInfo} />
        <Popup
          className={"popup"}
          visible={this.state.popupVisible}
          onHiding={this.hideInfo}
          dragEnabled={false}
          closeOnOutsideClick={true}
          showTitle={true}
          title={"Information"}
          width={700}
          height={400}
        >
          <Popup1 />
        </Popup>
      </div>
    );
  }
}

export default App;
