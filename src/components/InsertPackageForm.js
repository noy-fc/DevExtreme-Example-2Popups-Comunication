import React from "react";
import "devextreme-react/autocomplete";
import { Button } from "devextreme-react/button";
import { SelectBox, TextBox } from "devextreme-react";
import service from "./PackageListData";
import ArrayStore from "devextreme/data/array_store";

class InsertPackageForm extends React.Component {
  constructor(props) {
    super(props);
    this.buttonOptions = {
      text: "Register",
      type: "success",
      useSubmitBehavior: true
    };
    this.packageList = service.getPagekageList();
    this.selectOptionPackageData = new ArrayStore({
      data: this.packageList,
      key: "ID"
    });
    this.handlePackageChange = this.handlePackageChange.bind(this);
    this.handleQtyChange = this.handleQtyChange.bind(this);
  }

  handlePackageChange(e) {
    this.props.data.packageId = e.value;
  }
  handleQtyChange(e) {
    this.props.data.qty = e.value;
  }
  render() {
    const buttonDivStyle = {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      marginTop: "10px"
    };

    return (
      <React.Fragment>
        <form action={"package"}>
          <div className={"dx-field"}>
            <div className={"dx-field-label"}>Package size:</div>
            <div className={"dx-field-value"}>
              <SelectBox
                dataSource={this.selectOptionPackageData}
                displayExpr={"Name"}
                valueExpr={"ID"}
                value={this.props.data.packageId}
                onValueChanged={this.handlePackageChange}
                ref={ref => (this.SelectBox = ref)}
              />
            </div>
          </div>
          <div className={"dx-field"}>
            <div className={"dx-field-label"}>Quantity:</div>
            <div className={"dx-field-value"}>
              <TextBox
                value={this.props.data.qty}
                onValueChanged={this.handleQtyChange}
              />
            </div>
          </div>
          <div style={buttonDivStyle}>
            <Button
              width={70}
              height={70}
              text={7}
              type={"default"}
              style={{ marginRight: "10px" }}
              onClick={() => this.props.updateQuantityPackageValue(7)}
            />
            <Button
              type={"default"}
              width={70}
              height={70}
              text={8}
              onClick={() => this.props.updateQuantityPackageValue(8)}
            />
            <Button
              width={70}
              height={70}
              text={9}
              type={"default"}
              style={{ marginLeft: "10px" }}
              onClick={() => this.props.updateQuantityPackageValue(9)}
            />
          </div>
          <div style={buttonDivStyle}>
            <Button
              width={70}
              height={70}
              text={4}
              type={"default"}
              style={{ marginRight: "10px" }}
              onClick={() => this.props.updateQuantityPackageValue(4)}
            />
            <Button
              type={"default"}
              width={70}
              height={70}
              text={5}
              onClick={() => this.props.updateQuantityPackageValue(5)}
            />
            <Button
              width={70}
              height={70}
              text={6}
              type={"default"}
              style={{ marginLeft: "10px" }}
              onClick={() => this.props.updateQuantityPackageValue(6)}
            />
          </div>
          <div style={buttonDivStyle}>
            <Button
              width={70}
              height={70}
              text={1}
              type={"default"}
              style={{ marginRight: "10px" }}
              onClick={() => this.props.updateQuantityPackageValue(1)}
            />
            <Button
              type={"default"}
              width={70}
              height={70}
              text={2}
              onClick={() => this.props.updateQuantityPackageValue(2)}
            />
            <Button
              width={70}
              height={70}
              text={3}
              type={"default"}
              style={{ marginLeft: "10px" }}
              onClick={() => this.props.updateQuantityPackageValue(3)}
            />
          </div>
          <div style={buttonDivStyle}>
            <Button
              width={70}
              height={70}
              text={"0"}
              type={"default"}
              style={{ marginRight: "10px" }}
              onClick={() => this.props.updateQuantityPackageValue(0)}
            />
            <Button
              type={"default"}
              width={70}
              height={70}
              text={"."}
              onClick={() => this.props.updateQuantityPackageValue(".")}
            />
            <Button
              width={70}
              height={70}
              text={"c"}
              type={"default"}
              style={{ marginLeft: "10px" }}
              onClick={() => this.props.updateQuantityPackageValue("c")}
            />
          </div>
          <hr />
          <div>
            <Button
              width={100}
              type={"success"}
              text={"update"}
              style={{ marginLeft: "70%", marginRight: "3px" }}
              onClick={() => this.props.onUpdatePackageData()}
            />
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default InsertPackageForm;
