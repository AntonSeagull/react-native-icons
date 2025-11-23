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

export const PiMapPinSimpleLineLight = (props: IconProps) => {
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
        <Path d="M216 210h-82v-76.34a54 54 0 1 0-12 0V210H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12M86 80a42 42 0 1 1 42 42 42 42 0 0 1-42-42" />
      </G>
    </Svg>
  );
};