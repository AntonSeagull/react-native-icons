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

export const FcSerialTasks = (props: IconProps) => {
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
        <Path fill="#90CAF9" d="M33 9H11v4h22c1.1 0 2 .9 2 2v20H23v4h16V15c0-3.3-2.7-6-6-6" />
        <Path fill="#D81B60" d="M6 6h10v10H6z" />
        <Path d="M32 17h10v10H32zM16 32h10v10H16z" />
        <Circle cx={26} cy={11} r={5} />
        <Circle cx={37} cy={37} r={5} />
      </G>
    </Svg>
  );
};