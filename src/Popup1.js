import React, { Component } from "react";
import { Popup } from "devextreme-react/popup";
import { Button } from "devextreme-react";

import InsertPackageForm from "./components/InsertPackageForm";

class Popup1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popupVisible: false,
      packageFormData: {},
      packageFormJsx: null
    };
    this.showInfo = this.showInfo.bind(this);
    this.hideInfo = this.hideInfo.bind(this);
    this.handleUpdatePackageData = this.handleUpdatePackageData.bind(this);
  }
  showInfo() {
    this.setState({
      popupVisible: true,
      packageFormData: { packageId: null, qty: null }
    });
  }
  hideInfo() {
    this.setState({
      popupVisible: false
    });
  }

  handleUpdatePackageData() {
    this.hideInfo();
    this.setState({
      packageFormJsx: (
        <div style={{ color: "red" }}>
          packageId: {this.state.packageFormData.packageId}, qty:{" "}
          {this.state.packageFormData.qty}
        </div>
      )
    });
  }

  render() {
    return (
      <div>
        <Button text={"Open"} onClick={this.showInfo} />
        {this.state.packageFormJsx}
        <Popup
          className={"popup"}
          visible={this.state.popupVisible}
          onHiding={this.hideInfo}
          dragEnabled={false}
          closeOnOutsideClick={true}
          showTitle={true}
          title={"Information"}
          width={300}
          height={600}
        >
          <InsertPackageForm
            data={this.state.packageFormData}
            onUpdatePackageData={this.handleUpdatePackageData}
          />
        </Popup>
      </div>
    );
  }
}

export default Popup1;
