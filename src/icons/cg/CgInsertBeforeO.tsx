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

export const CgInsertBeforeO = (props: IconProps) => {
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
        <Path fill="currentColor" d="M5 3a1 1 0 0 1 0-2h14a1 1 0 1 1 0 2zM9 15a1 1 0 1 1 0-2h2v-2a1 1 0 1 1 2 0v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2z" />
        <Path fill="currentColor" fillRule="evenodd" d="M4 14a8 8 0 1 0 16 0 8 8 0 0 0-16 0m8-6a6 6 0 1 0 0 12 6 6 0 0 0 0-12" clipRule="evenodd" />
      </G>
    </Svg>
  );
};