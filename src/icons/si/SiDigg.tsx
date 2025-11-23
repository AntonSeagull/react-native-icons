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

export const SiDigg = (props: IconProps) => {
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
        <Path d="M17.76 8.16v8.16h3.84v.96h-3.84v1.92H24V8.16zm-7.2 0v8.16h3.84v.96h-3.84v1.92h6.24V8.16zM3.84 4.8v3.36H0v8.16h6.24V4.8zM9.6 8.16H7.2v8.16h2.4zm12 6.24h-1.44v-4.32h1.44zm-17.76 0H2.4v-4.32h1.44zm10.56 0h-1.44v-4.32h1.44zM9.6 4.8H7.2v2.4h2.4z" />
      </G>
    </Svg>
  );
};