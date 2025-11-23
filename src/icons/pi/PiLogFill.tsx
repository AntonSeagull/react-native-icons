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

export const PiLogFill = (props: IconProps) => {
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
        <Path d="M212 136a12 12 0 1 1-12-12 12 12 0 0 1 12 12m36 0c0 40.37-21.08 72-48 72H56c-26.92 0-48-31.63-48-72s21.08-72 48-72h36.69l37.65-37.66A8 8 0 0 1 136 24h32a8 8 0 0 1 0 16h-28.69l-24 24H200c26.92 0 48 31.63 48 72m-144-8a8 8 0 0 0 0-16H33.26a8 8 0 1 0 0 16Zm50.91 32a8 8 0 0 0-8-8H80a8 8 0 0 0 0 16h66.91a8 8 0 0 0 8-8M232 136c0-30.36-14.65-56-32-56s-32 25.64-32 56 14.65 56 32 56 32-25.64 32-56" />
      </G>
    </Svg>
  );
};