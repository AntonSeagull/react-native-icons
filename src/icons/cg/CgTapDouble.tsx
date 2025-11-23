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

export const CgTapDouble = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="currentColor" fillRule="evenodd" d="M14.924 18v-4a3 3 0 0 0-6 0v4a3 3 0 1 0 6 0m-3-9a5 5 0 0 0-5 5v4a5 5 0 0 0 10 0v-4a5 5 0 0 0-5-5" clipRule="evenodd" />
        <Path fill="currentColor" d="M10.924 14a1 1 0 1 1 2 0v3h-2zM11.924 1a9.97 9.97 0 0 1 7.105 2.963l-1.415 1.414A7.98 7.98 0 0 0 11.924 3c-2.15 0-4.1.847-5.538 2.227L4.97 3.812A9.97 9.97 0 0 1 11.924 1" />
        <Path fill="currentColor" fillRule="evenodd" d="M11.923 5a6.97 6.97 0 0 1 4.38 1.539l-1.426 1.426A4.98 4.98 0 0 0 11.923 7c-1.075 0-2.071.34-2.886.917l-1.43-1.429A6.97 6.97 0 0 1 11.924 5" clipRule="evenodd" />
      </G>
    </Svg>
  );
};