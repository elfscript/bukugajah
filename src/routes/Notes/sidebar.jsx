import React from 'react';
import { Link } from 'react-router';
import css from './sidebar.css';
import { ButtonUI, IconUI } from '../../components/SemanticUI';

import { connector } from '../../store';

const SidebarNoteItem = props => (
  <div>
    <Link className={css.noteLink}>{props.title}</Link>
    <p className={css.textFaded}>{props.createdAt}</p>
    <p>
      {props.description}
    </p>
  </div>
);

SidebarNoteItem.propTypes = {
  title: React.PropTypes.string,
  createdAt: React.PropTypes.string,
  description: React.PropTypes.string,
}

const Sidebar = (props) => {
  const searchTerm = props.noteSearchTerm;
  const notesData = props.notesData;

  const filteredNotesData = notesData.filter(
    dataNote => (dataNote.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)
  );

  return (
    <div className={css.sidebar}>
      <h2>Notes</h2>
      <Link to="/editor">
        <ButtonUI className={css.addButton}>
          <IconUI name="add circle" />
          Add a New Note
        </ButtonUI>
      </Link>
      <p className={css.searchFilterContainer}>
        <span>Filter: </span>
        <span className={css.searchFilter}>{searchTerm}</span>
      </p>
      <div className={css.sidebarList}>
        {
          filteredNotesData.length < 1 ?
            <h2 className={css.sidebarNotFound}>Not found</h2>
            : filteredNotesData.map(
              dataNote => <SidebarNoteItem key={dataNote.id} {...dataNote} />
            )
        }
      </div>
    </div>
  );
}

export default connector(Sidebar);
