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

export const FcCrystalOscillator = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M3 28h26v4H3zM3 16h26v4H3z" />
        <Path fill="#2196F3" d="M43 11H20v26h23c1.1 0 2-.9 2-2V13c0-1.1-.9-2-2-2" />
        <Path fill="#64B5F6" d="M20 9h-2v30h2c1.1 0 2-.9 2-2V11c0-1.1-.9-2-2-2" />
      </G>
    </Svg>
  );
};