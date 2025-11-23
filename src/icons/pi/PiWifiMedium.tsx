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

export const PiWifiMedium = (props: IconProps) => {
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
        <Path d="M140 204a12 12 0 1 1-12-12 12 12 0 0 1 12 12m65-81.23a124 124 0 0 0-153.94 0A8 8 0 0 0 61 135.31a108 108 0 0 1 134.06 0 8 8 0 0 0 11.24-1.3 8 8 0 0 0-1.3-11.24m-32.26 35.76a76.05 76.05 0 0 0-89.42 0 8 8 0 0 0 9.42 12.94 60 60 0 0 1 70.58 0 8 8 0 1 0 9.42-12.94" />
      </G>
    </Svg>
  );
};