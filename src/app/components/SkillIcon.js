import React from 'react';
import PropTypes from 'prop-types';

function SkillIcon(props) {
  return (
    <div className="d-flex-v items-center">
      <i style={{ color: props.color }} className={props.icon}></i>
      <div className="hidden-cap">{props.name}</div>
    </div>
  );
}

SkillIcon.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default SkillIcon;
