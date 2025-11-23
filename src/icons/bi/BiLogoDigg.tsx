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

export const BiLogoDigg = (props: IconProps) => {
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
        <Path d="M16.803 8.8v6.801h3.2v.799h-3.2v1.602h5.2V8.8zm-6 0v6.801h3.199v.799h-3.199v1.602h5.199V8.8zM5.2 5.999V8.8H2v6.801h5.201V5.999zM10.001 8.8h-2v6.801h2zM20.003 14h-1.2v-3.601h1.2zM5.2 14H4v-3.601h1.2zm8.802 0h-1.2v-3.601h1.2zm-4.001-8.001h-2v2h2z" />
      </G>
    </Svg>
  );
};