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

export const PiGhostDuotone = (props: IconProps) => {
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
        <Path d="M216 120v96l-29.33-24-29.34 24L128 192l-29.33 24-29.34-24L40 216v-96a88 88 0 0 1 176 0" opacity={0.2} />
        <Path d="M112 116a12 12 0 1 1-12-12 12 12 0 0 1 12 12m44-12a12 12 0 1 0 12 12 12 12 0 0 0-12-12m68 16v96a8 8 0 0 1-13.07 6.19l-24.26-19.85-24.27 19.85a8 8 0 0 1-10.13 0L128 202.34l-24.27 19.85a8 8 0 0 1-10.13 0l-24.27-19.85-24.26 19.85A8 8 0 0 1 32 216v-96a96 96 0 0 1 192 0m-16 0a80 80 0 0 0-160 0v79.12l16.27-13.31a8 8 0 0 1 10.13 0l24.27 19.85 24.26-19.85a8 8 0 0 1 10.14 0l24.26 19.85 24.27-19.85a8 8 0 0 1 10.13 0L208 199.12Z" />
      </G>
    </Svg>
  );
};