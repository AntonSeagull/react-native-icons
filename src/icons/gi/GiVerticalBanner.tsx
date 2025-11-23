import {
  G,
  Path,
  Svg,
  Line,
  Circle,
  Polyline,
  Polygon,
  Rect,
  Ellipse
} from 'react-native-svg';
import type { IconProps } from '../../types';

export const GiVerticalBanner = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M279 25v30h-46V25zm178 35.396c3.485 1.262 7.267 2.717 11.195 4.55 5.553 2.589 10.945 5.739 14.409 8.742C486.067 76.69 487 78.936 487 80c0 1.063-.933 3.31-4.396 6.313s-8.856 6.152-14.409 8.742c-3.928 1.832-7.71 3.287-11.195 4.549zm-402 0v39.208c-3.485-1.262-7.267-2.717-11.195-4.55-5.553-2.589-10.945-5.739-14.409-8.742C25.933 83.31 25 81.064 25 80c0-1.063.933-3.31 4.396-6.313s8.856-6.152 14.409-8.742c3.928-1.832 7.71-3.287 11.195-4.549M439 73v14h-46V73zm-64 0v291.578L256 498.453 137 364.578V73zm-256 0v14H73V73zm210 23h-18v252.844l-55 68.75-55-68.75V96h-18v259.156l73 91.25 73-91.25z" />
      </G>
    </Svg>
  );
};