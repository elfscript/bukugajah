import React from 'react';
import { Link } from 'react-router';
import css from './sidebar.css';
import { ButtonUI, IconUI } from '../../components/SemanticUI';

import { connector } from '../../store';

const dataNotes = [
  {
    id: 1,
    title: 'My Future Nendos',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sine ea igitur iucunde negat posse se vivere? Nescio quo modo praetervolavit oratio. Non dolere, inquam, istud quam vim habeat postea videro; Ita enim vivunt.',
    createdAt: '20-20-2016',
    updatedAt: '21-20-2016',
    tags: ['casual', 'productivity', 'life'],
    category: 'work',
    images: ['menma', 'asuna'],
  },
  {
    id: 2,
    title: 'New Coding Agenda',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sine ea igitur iucunde negat posse se vivere? Nescio quo modo praetervolavit oratio. Non dolere, inquam, istud quam vim habeat postea videro; Ita enim vivunt.',
    createdAt: '20-20-2016',
    updatedAt: '21-20-2016',
    tags: ['casual', 'productivity', 'life'],
    category: 'work',
  },
  {
    id: 3,
    title: 'Food List',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sine ea igitur iucunde negat posse se vivere? Nescio quo modo praetervolavit oratio. Non dolere, inquam, istud quam vim habeat postea videro; Ita enim vivunt.',
    createdAt: '20-20-2016',
    updatedAt: '21-20-2016',
    tags: ['casual', 'productivity', 'life'],
    category: 'work',
  },
  {
    id: 4,
    title: 'My Own Novel Book',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sine ea igitur iucunde negat posse se vivere? Nescio quo modo praetervolavit oratio. Non dolere, inquam, istud quam vim habeat postea videro; Ita enim vivunt.',
    createdAt: '20-20-2016',
    updatedAt: '21-20-2016',
    tags: ['casual', 'productivity', 'life'],
    category: 'work',
  },
  {
    id: 5,
    title: 'Bucket List',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sine ea igitur iucunde negat posse se vivere? Nescio quo modo praetervolavit oratio. Non dolere, inquam, istud quam vim habeat postea videro; Ita enim vivunt.',
    createdAt: '20-20-2016',
    updatedAt: '21-20-2016',
    tags: ['casual', 'productivity', 'life'],
    category: 'work',
  },
];

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
  let searchTerm = '';
  if (typeof props.noteSearchTerm === 'string') {
    searchTerm = props.noteSearchTerm;
  }

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
          dataNotes.filter(
            dataNote => (dataNote.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)
          ).map(
            dataNote => <SidebarNoteItem key={dataNote.id} {...dataNote} />
          )
        }
      </div>
    </div>
  );
}

export default connector(Sidebar);
