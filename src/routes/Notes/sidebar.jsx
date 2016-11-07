import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import css from './sidebar.css';
import { ButtonUI, IconUI } from '../../components/SemanticUI';

import { connector } from '../../store';

const SidebarNoteItem = props => (
  <Link to={`/editor/${props.id}`}>
    <h2 className={css.noteLink}>{props.title}</h2>
    <p className={css.textFaded}>{props.createdAt}</p>
    <p>
      {props.description}
    </p>
  </Link>
);

SidebarNoteItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  createdAt: PropTypes.string,
  description: PropTypes.string,
}

class Sidebar extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.fetchNotes(); // function from Redux
  }

  render() {
    const searchTerm = this.props.noteSearchTerm; // from redux
    const notesData = this.props.notesData; // from redux?

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
}

export default connector(Sidebar);
