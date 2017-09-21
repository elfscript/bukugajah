import React, { Component, PropTypes }  from 'react';
import { Link }                         from 'react-router';

import css                  from './sidebar.css';
import { ButtonUI, IconUI } from '../../components/SemanticUI';
import { connector }        from '../../store';

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
id:           PropTypes.number,
	      title:        PropTypes.string,
	      createdAt:    PropTypes.string,
	      description:  PropTypes.string,
}

class Sidebar extends Component {

	componentDidMount() {
		this.props.fetchNotes(); // from redux
	}

	render() {
		const searchTerm = this.props.noteSearchTerm; // from redux
		const notesData = this.props.notesData; // from redux

		const filteredNotesData = notesData.filter(
				dataNote => {
				if(dataNote && dataNote.title) 
				return (dataNote.title.toLowerCase().indexOf(searchTerm.toLowerCase()) >=0 );
				else return  false;
				} 
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

Sidebar.propTypes = {
fetchNotes:     PropTypes.func,
		noteSearchTerm: PropTypes.string,
		notesData:      PropTypes.oneOfType([
				PropTypes.array,
				PropTypes.object
				])
}

export default connector(Sidebar);
