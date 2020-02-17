import React, { Component } from "react";
import { Tabs} from "antd";
import ShopList from "../components/Shop/ShopList"
import ShopAdd from "../components/Shop/ShopAdd"
const { TabPane } = Tabs;



class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    render() {
        return (
            <div className="p_shop">
                <Tabs tabPosition="left">
                    <TabPane tab="店铺列表" key="1">
                      <ShopList/>
                    </TabPane>
                    <TabPane tab="新增店铺" key="2">
                        <ShopAdd/>
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default Shop;
