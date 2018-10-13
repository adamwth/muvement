import React from 'react';
import {Button, Layout, Menu} from 'antd';
import ChoreoCards from "./ChoreoCards";

class HomeScreen extends React.Component {
  render() {
    const {Header, Content} = Layout;
    return (
      <Layout className="body" style={{overflowY: 'scroll', overflowX: 'hidden'}}>
        <Header>
          <div className="nav-bar">
            <div className="title">
              <h3 style={{ color: '#fff'}}>CHOREOGRAPHY</h3>
            </div>
            <div className="right-container">
              <Menu mode="horizontal" theme="dark">
                <Menu.Item key="1">
                  <Button icon="setting" ghost/>
                </Menu.Item>
              </Menu>
            </div>
          </div>
        </Header>
        <Content>
          <ChoreoCards data={["Red Velvet", "Black Pink", "Ikon", "Travelling Salesman"]}/>
        </Content>
      </Layout>
    );
  }
}

export default HomeScreen;