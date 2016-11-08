import React    from 'react';
import { Link } from 'react-router';

import css                  from './contentDefault.css';
import { ButtonUI, IconUI } from '../../components/SemanticUI';

const ContentDefault = () => (
  <div className={css.contentDefaultWrapper}>
    <p>
      <img src="./public/images/bookgajah.png" alt="icon" width="200px" />
    </p>
    <h2><IconUI name="send outline" /> Start by adding new notes, or edit your previous notes!</h2>
    <p>
      <Link to="/editor">
        <ButtonUI className={css.newBtn}>
          Add a New Note
        </ButtonUI>
      </Link>
    </p>
  </div>
);

ContentDefault.propTypes = {
  handleSetNewNote: React.PropTypes.func,
}

export default ContentDefault;
