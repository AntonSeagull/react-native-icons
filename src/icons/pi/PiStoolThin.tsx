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

export const PiStoolThin = (props: IconProps) => {
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
        <Path d="M196 64V40a12 12 0 0 0-12-12H72a12 12 0 0 0-12 12v24a12 12 0 0 0 12 12h11.32L60.05 223.38a4 4 0 0 0 3.33 4.62 4.5 4.5 0 0 0 .62 0 4 4 0 0 0 4-3.38L76.26 172h103.48l8.31 52.62A4 4 0 0 0 192 228a4.5 4.5 0 0 0 .63-.05 4 4 0 0 0 3.33-4.57L172.68 76H184a12 12 0 0 0 12-12M68 64V40a4 4 0 0 1 4-4h112a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H72a4 4 0 0 1-4-4m110.48 100h-101l13.9-88h73.16Z" />
      </G>
    </Svg>
  );
};