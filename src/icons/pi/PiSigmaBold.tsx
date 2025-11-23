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

export const PiSigmaBold = (props: IconProps) => {
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
        <Path d="M180 72V60H89l48.4 60.5a12 12 0 0 1 0 15L89 196h91v-12a12 12 0 0 1 24 0v24a12 12 0 0 1-12 12H64a12 12 0 0 1-9.37-19.5l58-72.5-58-72.5A12 12 0 0 1 64 36h128a12 12 0 0 1 12 12v24a12 12 0 0 1-24 0" />
      </G>
    </Svg>
  );
};