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

export const TfiTimer = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M9 2.025V1h1.5V0h-4v1H8v1.025c-3.902.26-7 3.508-7 7.475C1 13.636 4.364 17 8.5 17S16 13.636 16 9.5c0-3.967-3.098-7.215-7-7.475M8.5 16C4.916 16 2 13.084 2 9.5S4.916 3 8.5 3 15 5.916 15 9.5 12.084 16 8.5 16M9 9h4v1H8V6h1z" />
      </G>
    </Svg>
  );
};