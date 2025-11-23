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

export const CgYinyang = (props: IconProps) => {
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
        <Path fill="currentColor" d="M14 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
        <Path fill="currentColor" fillRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-10 0a4 4 0 0 1 0-8 8 8 0 1 0 0 16 4 4 0 0 0 0-8m2-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0" clipRule="evenodd" />
      </G>
    </Svg>
  );
};