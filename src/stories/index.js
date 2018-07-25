import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

// import { Button, Welcome } from "@storybook/react/demo";
import { Header, Particle, Card, Button, Button1 } from "../components/index";
storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <div style={{ width: "200px", height: "200px" }}>
      <Button onClick={action("clicked")}>
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </Button>
    </div>
  ));
const components = storiesOf("Components", module);
components.add("Demo", () => <Header />);
components.add("Particle", () => (
  <div style={{ backgroundColor: "black", height: "500px" }}>
    <Particle />//backgroundColor must be a dark one
  </div>
));
components.add("Card Without Props", () => <Card />);
components.add("Card With Props", () => (
  <Card
    style={{
      width: "400px",
      height: "400px",
      backgroundColor: "rgba(f,f,f,0.5)"
    }}
  />
));
