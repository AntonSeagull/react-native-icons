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

export const PiShowerBold = (props: IconProps) => {
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
        <Path d="M68 236a16 16 0 1 1-16-16 16 16 0 0 1 16 16m16-48a16 16 0 1 0 16 16 16 16 0 0 0-16-16m-64 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16m32 0a16 16 0 1 0-16-16 16 16 0 0 0 16 16M256 40a12 12 0 0 1-12 12h-23l-25.81 25.79-21.45 125.54a20 20 0 0 1-33.86 10.8l-98-98a20 20 0 0 1 10.84-33.88l125.5-21.44 29.29-29.3A12 12 0 0 1 216 28h28a12 12 0 0 1 12 12m-86.68 46.68-105 17.94 87.07 87.07Z" />
      </G>
    </Svg>
  );
};