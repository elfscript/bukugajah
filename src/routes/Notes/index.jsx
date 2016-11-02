import React, { Component } from 'react';
import { Link } from 'react-router';
import css from './index.css';
import { ButtonUI, InputUI, CardSimpleUI, IconUI } from '../../components/SemanticUI';

class Notes extends Component {
  handleClick() {
    console.log(this)
  }
  render() {
    return (
      <div>
        <div className={css.sidebar}>
          <h2>Notes</h2>
          <ButtonUI className={css.addButton}>
            <IconUI name="add circle" />
            Add New
          </ButtonUI>
          <div className={css.sidebarList}>
            <div>
              <Link className={css.noteLink}>Basic Idea</Link>
              <p className={css.textFaded}>7 Nov 2016</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sine ea igitur iucunde negat posse se vivere? Nescio quo
                modo praetervolavit oratio. Non dolere, inquam, istud quam
                vim habeat postea videro; Ita enim vivunt.
              </p>
            </div>
            <div>
              <Link className={css.noteLink}>Basic Idea</Link>
              <p className={css.textFaded}>7 Nov 2016</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sine ea igitur iucunde negat posse se vivere? Nescio quo
                modo praetervolavit oratio. Non dolere, inquam, istud quam
                vim habeat postea videro; Ita enim vivunt.
              </p>
            </div>
            <div>
              <Link className={css.noteLink}>Basic Idea</Link>
              <p className={css.textFaded}>7 Nov 2016</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sine ea igitur iucunde negat posse se vivere? Nescio quo
                modo praetervolavit oratio. Non dolere, inquam, istud quam
                vim habeat postea videro; Ita enim vivunt.
              </p>
            </div>
          </div>
        </div>
        <div className={css.content}>
          <input className={css.titleStoryBox} value="Default Value 101" />
          <p>500 Words, 12500 characters</p>
          <InputUI type="text" placeholder="tags..." />
          <div className={css.bigStoryBox} contentEditable="true"></div>
        </div>
      </div>
    );
  }
}

export default Notes;
