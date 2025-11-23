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

export const HiMiniH3 = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 10, 10)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="M2.75 4a.75.75 0 0 1 .75.75v4.5h5v-4.5a.75.75 0 0 1 1.5 0v10.5a.75.75 0 0 1-1.5 0v-4.5h-5v4.5a.75.75 0 0 1-1.5 0V4.75A.75.75 0 0 1 2.75 4M15 9.5q-1.096 0-2.15.15a.75.75 0 1 1-.209-1.485 17 17 0 0 1 3.476-.128c.985.065 1.878.837 1.883 1.932V10a6.8 6.8 0 0 1-.301 2A6.8 6.8 0 0 1 18 14v.031c-.005 1.095-.898 1.867-1.883 1.932a17 17 0 0 1-3.467-.127.75.75 0 0 1 .209-1.485 15.4 15.4 0 0 0 3.16.115c.308-.02.48-.24.48-.441L16.5 14q-.002-.648-.15-1.25h-2.6a.75.75 0 0 1 0-1.5h2.6q.148-.601.15-1.25v-.024c-.001-.201-.173-.422-.481-.443A16 16 0 0 0 15 9.5" clipRule="evenodd" />
      </G>
    </Svg>
  );
};