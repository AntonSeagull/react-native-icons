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

export const PiMapPinSimpleLineBold = (props: IconProps) => {
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
        <Path d="M216 204h-76v-65.21a60 60 0 1 0-24 0V204H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24M92 80a36 36 0 1 1 36 36 36 36 0 0 1-36-36" />
      </G>
    </Svg>
  );
};