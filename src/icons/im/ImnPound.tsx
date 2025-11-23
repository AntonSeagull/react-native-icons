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

export const ImnPound = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M7.5 1a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15m0 13.5a6 6 0 1 1 0-12 6 6 0 0 1 0 12" />
        <Path d="M9.5 11H6V9h1.5a.5.5 0 0 0 0-1H6v-.5a1.502 1.502 0 0 1 2.8-.75.499.499 0 1 0 .865-.501A2.51 2.51 0 0 0 7.5 4.999a2.503 2.503 0 0 0-2.5 2.5v.5h-.5a.5.5 0 0 0 0 1H5v3h4.5a.5.5 0 0 0 0-1z" />
      </G>
    </Svg>
  );
};