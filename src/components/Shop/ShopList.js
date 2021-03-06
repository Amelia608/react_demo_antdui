import React, { Component } from "react";
import { Table } from "antd";
// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
      console.log(
          `selectedRowKeys: ${selectedRowKeys}`,
          "selectedRows: ",
          selectedRows
      );
  },
  getCheckboxProps: record => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name
  })
};
class ShopList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableColumns: [
                {
                    title: "Name",
                    dataIndex: "name",
                    render: text => <a>{text}</a>
                },
                {
                    title: "Age",
                    dataIndex: "age"
                },
                {
                    title: "Address",
                    dataIndex: "address"
                }
            ],
            tableData: [
                {
                    key: "1",
                    name: "John Brown",
                    age: 32,
                    address: "New York No. 1 Lake Park"
                },
                {
                    key: "2",
                    name: "Jim Green",
                    age: 42,
                    address: "London No. 1 Lake Park"
                },
                {
                    key: "3",
                    name: "Joe Black",
                    age: 32,
                    address: "Sidney No. 1 Lake Park"
                },
                {
                    key: "4",
                    name: "Disabled User",
                    age: 99,
                    address: "Sidney No. 1 Lake Park"
                }
            ]
        };
    }
    render() {
        return (
            <div className="p_shoplist">
                <Table
                    rowSelection={rowSelection}
                    columns={this.state.tableColumns}
                    dataSource={this.state.tableData}
                />
            </div>
        );
    }
}

export default ShopList;
