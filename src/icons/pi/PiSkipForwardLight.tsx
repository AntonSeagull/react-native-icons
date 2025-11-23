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

export const PiSkipForwardLight = (props: IconProps) => {
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
        <Path d="M200 34a6 6 0 0 0-6 6v72.84L71.37 36.14a14 14 0 0 0-14.21-.37A13.69 13.69 0 0 0 50 47.88v160.24a13.69 13.69 0 0 0 7.16 12.11 14 14 0 0 0 14.21-.37L194 143.17V216a6 6 0 0 0 12 0V40a6 6 0 0 0-6-6m-6.88 95.56L65 209.69a2 2 0 0 1-2 .05 1.79 1.79 0 0 1-1-1.62V47.88a1.79 1.79 0 0 1 1-1.62 2.1 2.1 0 0 1 1-.26 2 2 0 0 1 1 .31l128.12 80.13a1.82 1.82 0 0 1 0 3.12" />
      </G>
    </Svg>
  );
};