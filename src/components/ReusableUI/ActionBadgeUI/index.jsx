import React from 'react';
import css from './style.css';

const ActionBadge = (props) => {
  let badgeColor = css.greenBadge;
  if (props.type === 'saved') {
    badgeColor = css.greenBadge;
  }
  if (props.type === 'deleted') {
    badgeColor = css.redBadge;
  }
  return (
    <div className={`${css.actionBadge} ${badgeColor}`}>{props.value}</div>
  );
};

ActionBadge.propTypes = {
  value: React.PropTypes.string,
  type: React.PropTypes.string,
}

export default ActionBadge;
