import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {} from 'reactstrap';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Page1 from './page1';

/*class Header extends React.Component{
  render(){
    return(
      <div className="row">
        <div className="col-sm-6" style={{border:"1px solid red",boxSizing:"border-box"}}>one</div>
        <div className="col-sm-6" style={{border:"1px solid red",boxSizing:"border-box"}}><button className="btn btn-primary">Click</button></div>
        
      </div>
    )
  }
}*/

import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

const Example = () => {

		return(
		<>
		<BrowserRouter>
        <Route path="/page1"  component={Page1}/ >
</BrowserRouter>
		
  <div>
    <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
      Toggle Helloooo
    </Button>
    <UncontrolledCollapse toggler="#toggler">
      <Card>
        <CardBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
          similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
          dignissimos esse fuga! Minus, alias.
		  <img src={require("./logo192.png")}/>
        </CardBody>
      </Card>
    </UncontrolledCollapse>
  </div>
  </>
  )
};
ReactDOM.render(<Example/>,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

