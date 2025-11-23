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

export const FcLandscape = (props: IconProps) => {
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
        <Path d="m40.997 6.065 7 7-7 6.999-7-7z" />
        <Path d="M36 8h10v10H36z" />
        <Circle cx={41} cy={13} r={3} fill="#FFEB3B" />
        <Path fill="#2E7D32" d="M16.5 18 0 42h33z" />
        <Path fill="#4CAF50" d="M33.6 24 19.2 42H48z" />
      </G>
    </Svg>
  );
};