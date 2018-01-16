/* eslint-env browser */
// IMPORT DEPENDENCIES
import React from 'react';
import styled from 'styled-components';

import screenBreaks from '../../consts/screen-breaks.scss';

const Line = styled(({ className, id, type }) => (
  <svg
    id={id}
    className={`${className} ${type}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 797.6 4.61"
    preserveAspectRatio="none"
    width="100%"
    height="3">
    <title>Line</title>
    <g id="Assets">
      <polygon className="elements" points="797.6 1.41 797.22 1.31 796.25 1.58 797.6 1.41" />
      <path className="elements" d={'M791.18,2c.19,0,.1.13.29.18l3.77-.76C793.55,1,792.29,2.29,791.18,2Z'} />
      <path className="elements" d={'M790.07,1.92a4.05,4.05,0,0,0-2.41.3C788.17,1.94,790.39,2.31,790.07,1.92Z'} />
      <path className="elements" d={'M661.38,1.82l.45,0A1.52,1.52,0,0,0,661.38,1.82Z'} />
      <path className="elements" d={'M627.8,3l-.35.29c6.26-.5,13.33,0,20-.17l-.45.1c16.81.15,32.32-.3,49-.49-.26,0-.35.12-.62.15a16.92,16.92,0,0,1,2.6-.26c.23.06-.25.13-.54.16,3.52.49,10.35-.28,12.55.09,1,0,1.43-.25.88-.4,13.06-.09,27-.16,40.32-.5.64.07.76.2.58.36,11.37-.75,23.28-.42,34.91-.27.45-.2-1.19-.22,0-.43-3.74-.26-6.85.49-10.24.11l.44-.2c-2.47-.13-.5.5-3.06.24-1-.17.25-.25-.22-.27-5.24.07-10.71-.12-15.65.35-1.22-.43-5.63,0-7.57-.44a15.61,15.61,0,0,0-3.23.4c-18.35-.27-37.11.11-55.91,0-8.8.81-19.33-.2-29.78.05-.07,0-.06-.06,0-.08C658,2,653,2.11,649,2l-3.44.34c-24.45-.77-49.44-.32-74.27-.67C543,1.4,518.3.75,490.81,1.78c0-.08-.19-.13.52-.16-7.93.15-15.16-.16-22.63,0l0-.08c-18.53.64-38.58-.17-56.44.52-21.75-.12-46.34-.1-69.37.06L343,2c-18.42.31-36.22-.6-54.6-.38-18.9-.41-38.87.86-57.94.32-11.79-.83-27.29.86-38.37,0-22.76-1.31-44.84-.54-67.6.16-21-.49-42,.61-62.28-.34-9.63.57-20.27-.77-31-.62l.38.2c-3.85-.62-8.58.84-11-.08l.41,0c-2-.47-4.73,1.09-6,.53l-.33.23c-2.47.06-.29-.26-2.19-.36-.72,0-.27.42-1.77.28-.32-.94-6,.19-6.21-.87C5.89,1,2.43.59,5.46.38,4.6.27.46.31.83.76c-.35.47-2,.89.54,1.26l.51-.35c.85.35.64.17.95.43,3.28.05,3.72.56,6.07.77,0,0,0,0,0,0A18.66,18.66,0,0,1,14,2.74l.51.19c.77.41,3.74-.78,2.74-.09,6.67-.16,14.32-.13,21.78-.13,1-.26,5.71,0,4.08-.47C45,2.83,50.52,3,52.58,3c-.08.05-.17.12-.49.09,4,.76,4.74-.68,8.48.24.59-.65,6.8.22,8.92-.54.46.14.62.28.45.39,6.74,0,14.19.28,19.9.32,4.88-.56,11.8.28,16-.49a129.3,129.3,0,0,0,13.94.21l-.47.1c5.47,0,12.31-.06,16.06-.55,1.62.75,4,.61,6.35.86,3.65-.34,11-.22,16.6-.53.85.35,4.6-.14,4.89.37,15.62-.94,34.93-.56,51.6.21l-.24,0c2.16-.27,4.66-.88,6.86-1.23.22,0,.19.13-.27.12,3-.09,5.89.41,8.94.33,0,.08,0,.08-.52.16,2.86-.22,5.9.42,9.27,0l.19.13,2.14-.18c-.05.17-.14.42-1.28.36,26.15.22,53.14-.59,80-.41l-1,.16,5.21-.27c0,.08-.28.12-.53.16,6.63.3,13.51-.16,20-.07,0,.08-1,.24-.1.33,4.78-.44,7.68.61,10.08-.33.22,0,.37.26-.11.33,13.31-.28,27-.24,40.39-.06,11.17-.83,23.65,0,35.25-.68l-.06.17c15-.56,30.95.11,46.51,0,6.46.08,10.83-.11,17.33-.11l.16.21c10.93-.78,23,.77,34.39-.09l-.79.29c1.77-.44,6.9.17,6.23-.59l2,.24c7.75-1,14.1.5,23.6-.14l-.62.18a59.67,59.67,0,0,1,7.34-.07,5.89,5.89,0,0,1-.76.13c7.91.74,16.71,0,25.05,0l-.95.34c4-.39,11.43,0,16.73-.17l-.32.16,2.68-.22.07.32C614.58,3.27,621.07,3,627.8,3Z'} />
      <path className="elements" d="M697.4,2.77h-.07C697.12,2.79,697.22,2.78,697.4,2.77Z" />
      <path className="elements" d="M9.75,2.95,8.9,2.88A3.51,3.51,0,0,0,9.75,2.95Z" />
    </g>
  </svg>
))`
height: ${props => props.height}rem;

@media screen and (min-width: ${screenBreaks.medium}) {
  height: ${props => (props.height * 1.25)}rem;
}

${props => (props.scale ? `
transform: scale(${props.scale});
`
    : null)}

.elements {
  fill: ${props => props.color};
}

&.hr {
  margin: 1rem 0;
}
`;

export default Line;
