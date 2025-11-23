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

export const PiCheckFatBold = (props: IconProps) => {
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
        <Path d="m246.15 65.46-.07-.08-23.93-23.53a20 20 0 0 0-28.23-.05l-90 88.83-33.86-32.85a20 20 0 0 0-28.21.08l-24 24a20 20 0 0 0 0 28.26l71.62 72a20 20 0 0 0 28.29 0L246.15 93.74a20 20 0 0 0 0-28.28M103.61 202.33 37.64 136 56 117.61 95.65 156a12 12 0 0 0 16.78-.08L208 61.61l18.32 18Z" />
      </G>
    </Svg>
  );
};