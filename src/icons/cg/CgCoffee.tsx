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

export const CgCoffee = (props: IconProps) => {
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
        <Path fill="currentColor" d="M6 2.5a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1" />
        <Path fill="currentColor" fillRule="evenodd" d="M13 21.5a6 6 0 0 0 5.917-5H19a4 4 0 0 0 0-8v-1H1v8a6 6 0 0 0 6 6zM3 9.5v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-6zm18 3a2 2 0 0 1-2 2v-4a2 2 0 0 1 2 2" clipRule="evenodd" />
        <Path fill="currentColor" d="M9 3.5a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0zM14 2.5a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1" />
      </G>
    </Svg>
  );
};