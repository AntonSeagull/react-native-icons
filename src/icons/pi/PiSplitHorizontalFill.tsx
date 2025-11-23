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

export const PiSplitHorizontalFill = (props: IconProps) => {
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
        <Path d="M112 48v160a8 8 0 0 1-16 0v-72H64v24a8 8 0 0 1-13.66 5.66l-32-32a8 8 0 0 1 0-11.32l32-32A8 8 0 0 1 64 96v24h32V48a8 8 0 0 1 16 0m125.66 74.34-32-32A8 8 0 0 0 192 96v24h-32V48a8 8 0 0 0-16 0v160a8 8 0 0 0 16 0v-72h32v24a8 8 0 0 0 13.66 5.66l32-32a8 8 0 0 0 0-11.32" />
      </G>
    </Svg>
  );
};