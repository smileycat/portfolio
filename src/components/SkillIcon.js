import React from 'react';
import PropTypes from 'prop-types';

function SkillIcon(props) {
  return (
    <div className="d-flex-v items-center">
      <i className={props.icon}></i>
      <div className="hidden-cap">{props.caption}</div>
    </div>
  );
}

SkillIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

export default SkillIcon;
