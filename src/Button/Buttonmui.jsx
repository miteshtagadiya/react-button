import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'muicss/lib/react/button';

class Buttonmui extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Button>button</Button>
          <Button color="primary">button</Button>
          <Button color="danger">button</Button>
          <Button color="accent">button</Button>
        </div>
        <div>
          <Button disabled={true}>button</Button>
          <Button color="primary" disabled={true}>button</Button>
          <Button color="danger" disabled={true}>button</Button>
          <Button color="accent" disabled={true}>button</Button>
        </div>
      </div>
    );
  }
}

export default Buttonmui;
