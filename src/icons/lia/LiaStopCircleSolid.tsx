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

export const LiaStopCircleSolid = (props: IconProps) => {
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
        <Path d="M16 3C8.85 3 3 8.85 3 16s5.85 13 13 13 13-5.85 13-13S23.15 3 16 3m0 2c6.05 0 11 4.95 11 11s-4.95 11-11 11S5 22.05 5 16 9.95 5 16 5m-5 6v10h10V11H11m2 2h6v6h-6z" />
      </G>
    </Svg>
  );
};