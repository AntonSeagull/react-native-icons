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

export const PiFeatherDuotone = (props: IconProps) => {
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
        <Path d="m215.8 119.6-69.26 70.06a8 8 0 0 1-5.65 2.34H64.2v-76.69a8 8 0 0 1 2.34-5.65l45.66-45.14V144l24-24Z" opacity={0.2} />
        <Path d="M221.28 34.75a64 64 0 0 0-90.49 0L60.69 104A15.9 15.9 0 0 0 56 115.31v73.38l-29.66 29.65a8 8 0 0 0 11.32 11.32L67.32 200h73.38a15.92 15.92 0 0 0 11.3-4.68l69.23-70a64 64 0 0 0 .05-90.57m-79.21 11.31A48 48 0 0 1 211.79 112h-56.46l34.35-34.34a8 8 0 0 0-11.32-11.32L120 124.69V67.87ZM72 115.35l32-31.67v57l-32 32ZM140.7 184H83.32l56-56h56.74Z" />
      </G>
    </Svg>
  );
};