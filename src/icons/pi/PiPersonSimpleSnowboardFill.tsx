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

export const PiPersonSimpleSnowboardFill = (props: IconProps) => {
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
        <Path d="M136 52a28 28 0 1 1 28 28 28 28 0 0 1-28-28m87.67 70.25a8 8 0 0 1-9.93 5.42l-79.07-23.26-7.78 11.67 35.33 10.23a8 8 0 0 1 4.42 12.14l-19.75 29.44 50.89 14.75A25.32 25.32 0 0 1 216 206.81 25.28 25.28 0 0 1 190.79 232a25.9 25.9 0 0 1-7.14-1L26.21 185.35A25.32 25.32 0 0 1 8 161.18 25.25 25.25 0 0 1 40.34 137l44.73 13 33.52-50.28-40.85-12a8 8 0 1 1 4.52-15.35l136 40a8 8 0 0 1 5.41 9.88M117.58 130l-16.4 24.6 29.58 8.58 16.49-24.59Z" />
      </G>
    </Svg>
  );
};