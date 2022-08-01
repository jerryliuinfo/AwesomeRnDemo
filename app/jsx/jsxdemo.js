import React from "react";
import { Image, Text } from "react-native";

const name = "Tome";
const HelloElement = <h1>Hello ${name}</h1>;


const user = {
  "firstName": "jerry",
  "lastName": "liu",
  "avator": "https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF",
};

function formatUser(user) {
  return user.firstName + "_" + user.lastName;
}

const GreetingUser = (
  <>
    <h1>Hello ${formatUser(user)}</h1>
    <img src={user.avator} />
  </>
);


function getGreeting(user) {
  if (user) {
    return <h1>Hello ${formatUser(user)}</h1>;
  }
  return <h1>Hello Stranger</h1>;
}


const root = ReactDOM.createRoot(
  document.getElementById("root"),
);
const element = <h1>Hello world</h1>;
root.render(element);

function tick() {
  const element = (
    <div>
      <h1>Hello world</h1>
      <h2>It is ${new Date().toLocaleTimeString()} </h2>
    </div>
  );
  root.render(element);
}

function Clock(props) {
  return (
    <div>
      <h1>Hello world</h1>
      <h2>It is ${props.date.toLocaleTimeString()} </h2>
    </div>
  );
}

function tick2() {
  root.render(<Clock date={new Date()} />);
  root.render(<ClockComponent2 />);
}

setInterval(tick, 1000);
setInterval(tick2, 1000);

export class Welcome extends React.Component {
  render() {
    return <h1>Hello, ${this.props.name} </h1>;
  }
}

export class ClockComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <h2>It is ${this.props.date.toLocaleTimeString()} </h2>
      </div>
    );
  }
}

export class ClockComponent2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time2: new Date(),
    };
  }

  componentDidMount() {
    print("componentDidMount");

    this.timerId = setInterval(() => this.update(), 1000);
  }

  componentWillUnmount() {
    print("componentDidMount");
    clearInterval(this.timerId);
  }

  update() {
    this.setState({
      time2: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <h2>It is ${this.state.time2.toLocaleTimeString()} </h2>

      </div>
    );
  }
}



















