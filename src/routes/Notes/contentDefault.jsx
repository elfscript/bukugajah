import React from 'react';
import css from './contentDefault.css';
import { ButtonUI, IconUI } from '../../components/SemanticUI';


const ContentDefault = props => (
  <div className={css.contentDefaultWrapper}>
    <p>
      <img src="./public/images/bookgajah.png" alt="icon" width="200px" />
    </p>
    <h2><IconUI name="send outline" /> Start by adding new notes, or edit your previous notes!</h2>
    <p>
      <ButtonUI
        className={css.newBtn}
        onClick={props.handleSetNewNote(true)}
      >
        Add a New Note
      </ButtonUI>
    </p>
  </div>
);

ContentDefault.propTypes = {
  handleSetNewNote: React.PropTypes.func,
}

export default ContentDefault;
