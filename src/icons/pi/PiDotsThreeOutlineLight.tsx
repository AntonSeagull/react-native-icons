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

export const PiDotsThreeOutlineLight = (props: IconProps) => {
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
        <Path d="M128 98a30 30 0 1 0 30 30 30 30 0 0 0-30-30m0 48a18 18 0 1 1 18-18 18 18 0 0 1-18 18M48 98a30 30 0 1 0 30 30 30 30 0 0 0-30-30m0 48a18 18 0 1 1 18-18 18 18 0 0 1-18 18m160-48a30 30 0 1 0 30 30 30 30 0 0 0-30-30m0 48a18 18 0 1 1 18-18 18 18 0 0 1-18 18" />
      </G>
    </Svg>
  );
};