import React, { Component } from "react";
import { Particle, Header, Card, Button } from "./components/index";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Particle />
        <div id="mainData">
          <Header />
          <Card className="divCard" style={{ textAlign: "center" }}>
            <Button style={{ color: "black", fontWeight: "bold" }}>
              Log In
            </Button>
          </Card>
        </div>
      </div>
    );
  }
}

export default App;
