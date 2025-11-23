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

export const PiUsersFour = (props: IconProps) => {
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
        <Path d="M27.2 126.4a8 8 0 0 0 11.2-1.6 52 52 0 0 1 83.2 0 8 8 0 0 0 11.2 1.59 7.7 7.7 0 0 0 1.59-1.59 52 52 0 0 1 83.2 0 8 8 0 0 0 12.8-9.61A67.85 67.85 0 0 0 203 93.51a40 40 0 1 0-53.94 0 67.3 67.3 0 0 0-21 14.31 67.3 67.3 0 0 0-21-14.31 40 40 0 1 0-53.94 0A67.9 67.9 0 0 0 25.6 115.2a8 8 0 0 0 1.6 11.2M176 40a24 24 0 1 1-24 24 24 24 0 0 1 24-24m-96 0a24 24 0 1 1-24 24 24 24 0 0 1 24-24m123 157.51a40 40 0 1 0-53.94 0 67.3 67.3 0 0 0-21 14.31 67.3 67.3 0 0 0-21-14.31 40 40 0 1 0-53.94 0A67.9 67.9 0 0 0 25.6 219.2a8 8 0 1 0 12.8 9.6 52 52 0 0 1 83.2 0 8 8 0 0 0 11.2 1.59 7.7 7.7 0 0 0 1.59-1.59 52 52 0 0 1 83.2 0 8 8 0 0 0 12.8-9.61A67.85 67.85 0 0 0 203 197.51M80 144a24 24 0 1 1-24 24 24 24 0 0 1 24-24m96 0a24 24 0 1 1-24 24 24 24 0 0 1 24-24" />
      </G>
    </Svg>
  );
};