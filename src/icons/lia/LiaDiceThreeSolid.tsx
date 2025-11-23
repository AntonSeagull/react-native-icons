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

export const LiaDiceThreeSolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M5 5v22h22V5zm2 2h18v18H7zm4 2a2 2 0 0 0 0 4 2 2 0 0 0 0-4m5 5a2 2 0 0 0 0 4 2 2 0 0 0 0-4m5 5a2 2 0 0 0 0 4 2 2 0 0 0 0-4" />
      </G>
    </Svg>
  );
};