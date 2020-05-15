import React from 'react';

function SkillIcon(props) {
  return (
    <div className="d-flex-v items-center">
      <i className={props.icon}></i>
      <div className="hidden-cap">{props.caption}</div>
    </div>
  );
}

export default SkillIcon;
