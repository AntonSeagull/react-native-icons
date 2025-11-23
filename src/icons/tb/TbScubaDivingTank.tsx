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

export const TbScubaDivingTank = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M8 11a4 4 0 1 1 8 0v5H8zM8 16v3a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-3M9 4h6M12 7V4M7 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
        <Circle cx={12} cy={4} r={0.5} fill="currentColor" />
      </G>
    </Svg>
  );
};