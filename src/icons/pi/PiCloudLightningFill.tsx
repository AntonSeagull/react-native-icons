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

export const PiCloudLightningFill = (props: IconProps) => {
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
        <Path d="M156 168h-23.47l-14.4 24H144a8 8 0 0 1 6.86 12.12l-24 40a8 8 0 0 1-13.72-8.24L129.87 208H104a8 8 0 0 1-6.86-12.12L113.87 168h-37C48.12 168 24.2 145.07 24 116.36A52.09 52.09 0 0 1 61.35 66.1a4 4 0 0 1 5 4.78A92.5 92.5 0 0 0 64 87.39 8.14 8.14 0 0 0 71.41 96h.6a8.18 8.18 0 0 0 8.08-7.72A76 76 0 1 1 156 168" />
      </G>
    </Svg>
  );
};