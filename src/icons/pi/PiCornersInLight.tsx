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

export const PiCornersInLight = (props: IconProps) => {
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
        <Path d="M154 96V48a6 6 0 0 1 12 0v42h42a6 6 0 0 1 0 12h-48a6 6 0 0 1-6-6m-58 58H48a6 6 0 0 0 0 12h42v42a6 6 0 0 0 12 0v-48a6 6 0 0 0-6-6m112 0h-48a6 6 0 0 0-6 6v48a6 6 0 0 0 12 0v-42h42a6 6 0 0 0 0-12M96 42a6 6 0 0 0-6 6v42H48a6 6 0 0 0 0 12h48a6 6 0 0 0 6-6V48a6 6 0 0 0-6-6" />
      </G>
    </Svg>
  );
};