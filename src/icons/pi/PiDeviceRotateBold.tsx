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

export const PiDeviceRotateBold = (props: IconProps) => {
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
        <Path d="m208.49 224.49-24 24a12 12 0 0 1-17-17L171 228H80a28 28 0 0 1-28-28v-92a12 12 0 0 1 24 0v92a4 4 0 0 0 4 4h91l-3.52-3.51a12 12 0 0 1 17-17l24 24a12 12 0 0 1 .01 17M80 76a12 12 0 0 0 8.49-20.49L85 52h91a4 4 0 0 1 4 4v92a12 12 0 0 0 24 0V56a28 28 0 0 0-28-28H85l3.52-3.52a12 12 0 0 0-17-17l-24 24a12 12 0 0 0 0 17l24 24A12 12 0 0 0 80 76" />
      </G>
    </Svg>
  );
};