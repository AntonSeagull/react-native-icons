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

export const CgExtension = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M13 3h8v8h-8zm2 2h4v4h-4z" clipRule="evenodd" />
        <Path fill="currentColor" fillRule="evenodd" d="M17 21v-8h-6V7H3v14zM9 9H5v4h4zM5 19v-4h4v4zm6 0v-4h4v4z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};