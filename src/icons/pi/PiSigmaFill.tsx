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

export const PiSigmaFill = (props: IconProps) => {
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
        <Path d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-16 64a8 8 0 0 1-16 0V72H96l38.4 51.2a8 8 0 0 1 0 9.6L96 184h72v-16a8 8 0 0 1 16 0v24a8 8 0 0 1-8 8H80a8 8 0 0 1-6.4-12.8L118 128 73.6 68.8A8 8 0 0 1 80 56h96a8 8 0 0 1 8 8Z" />
      </G>
    </Svg>
  );
};