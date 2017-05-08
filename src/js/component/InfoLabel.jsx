import React from 'react'

import style from 'css/content.css'

const InfoLabel = ({
  label,
  bgColor,
  fontColor,
  onDoubleClick = () => {}
}) =>
  <div className={style.envinfo}>
    <span style={{
      backgroundColor: bgColor,
      color: fontColor }}
      onDoubleClick={onDoubleClick}>
      {label}
    </span>
  </div>

export default InfoLabel
