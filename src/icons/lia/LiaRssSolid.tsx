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

export const LiaRssSolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M5 5v4c9.93 0 18 8.07 18 18h4C27 14.85 17.15 5 5 5m0 7v4c6.07 0 11 4.93 11 11h4c0-8.28-6.72-15-15-15m3 9a3 3 0 0 0 0 6 3 3 0 0 0 0-6" />
      </G>
    </Svg>
  );
};