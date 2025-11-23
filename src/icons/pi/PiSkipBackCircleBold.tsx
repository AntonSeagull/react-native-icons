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

export const PiSkipBackCircleBold = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84 84.09 84.09 0 0 1-84 84m37.82-134.5a12 12 0 0 0-12.18.32L108 106.35V88a12 12 0 0 0-24 0v80a12 12 0 0 0 24 0v-18.35l45.64 28.53A12 12 0 0 0 172 168V88a12 12 0 0 0-6.18-10.5M148 146.35 118.64 128 148 109.65Z" />
      </G>
    </Svg>
  );
};