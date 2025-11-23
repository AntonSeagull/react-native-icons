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

export const CgInsertAfterO = (props: IconProps) => {
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
        <Path fill="currentColor" d="M9 8a1 1 0 0 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2V6a1 1 0 1 0-2 0v2z" />
        <Path fill="currentColor" fillRule="evenodd" d="M4 9a8 8 0 1 1 16 0A8 8 0 0 1 4 9m8 6a6 6 0 1 1 0-12 6 6 0 0 1 0 12" clipRule="evenodd" />
        <Path fill="currentColor" d="M5 20a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z" />
      </G>
    </Svg>
  );
};