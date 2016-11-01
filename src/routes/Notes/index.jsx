import React, { Component } from 'react';
import css from './index.css';
import { ButtonUI, InputUI, CardSimpleUI } from '../../components/SemanticUI';

class Notes extends Component {
  handleClick() {
    console.log(this)
  }
  render() {
    return (
      <div className={css.home}>
        <h1 className={css.hi}>
          hello Again!
        </h1>
        <ButtonUI handleClick={e => this.handleClick(e)}>hey</ButtonUI>
        <InputUI placeholder="heyyy" />
        <CardSimpleUI />
      </div>
    );
  }
}

export default Notes;
