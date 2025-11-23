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

export const PiGitForkLight = (props: IconProps) => {
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
        <Path d="M222 64a30 30 0 1 0-36 29.4V112a10 10 0 0 1-10 10H80a10 10 0 0 1-10-10V93.4a30 30 0 1 0-12 0V112a22 22 0 0 0 22 22h42v28.6a30 30 0 1 0 12 0V134h42a22 22 0 0 0 22-22V93.4A30.05 30.05 0 0 0 222 64M46 64a18 18 0 1 1 18 18 18 18 0 0 1-18-18m100 128a18 18 0 1 1-18-18 18 18 0 0 1 18 18m46-110a18 18 0 1 1 18-18 18 18 0 0 1-18 18" />
      </G>
    </Svg>
  );
};