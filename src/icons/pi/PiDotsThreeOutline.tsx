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

export const PiDotsThreeOutline = (props: IconProps) => {
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
        <Path d="M128 96a32 32 0 1 0 32 32 32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16 16 16 0 0 1-16 16M48 96a32 32 0 1 0 32 32 32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16 16 16 0 0 1-16 16m160-48a32 32 0 1 0 32 32 32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16 16 16 0 0 1-16 16" />
      </G>
    </Svg>
  );
};