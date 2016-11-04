import React from 'react';
import { Link } from 'react-router';
import css from './sidebar.css';
import { ButtonUI, IconUI } from '../../components/SemanticUI';

const Sidebar = () => (
  <div className={css.sidebar}>
    <h2>Notes</h2>
    <Link to="/editor">
      <ButtonUI className={css.addButton}>
        <IconUI name="add circle" />
        Add a New Note
      </ButtonUI>
    </Link>
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
    </div>
  </div>
);

export default Sidebar;
