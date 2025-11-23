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

export const PiDotsThreeOutlineThin = (props: IconProps) => {
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
        <Path d="M128 100a28 28 0 1 0 28 28 28 28 0 0 0-28-28m0 48a20 20 0 1 1 20-20 20 20 0 0 1-20 20m-80-48a28 28 0 1 0 28 28 28 28 0 0 0-28-28m0 48a20 20 0 1 1 20-20 20 20 0 0 1-20 20m160-48a28 28 0 1 0 28 28 28 28 0 0 0-28-28m0 48a20 20 0 1 1 20-20 20 20 0 0 1-20 20" />
      </G>
    </Svg>
  );
};