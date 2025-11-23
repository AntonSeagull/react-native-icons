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

export const PiTextColumnsBold = (props: IconProps) => {
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
        <Path d="M120 64a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h68a12 12 0 0 1 12 12m-12 28H40a12 12 0 0 0 0 24h68a12 12 0 0 0 0-24m0 40H40a12 12 0 0 0 0 24h68a12 12 0 0 0 0-24m0 40H40a12 12 0 0 0 0 24h68a12 12 0 0 0 0-24m40-96h68a12 12 0 0 0 0-24h-68a12 12 0 0 0 0 24m68 16h-68a12 12 0 0 0 0 24h68a12 12 0 0 0 0-24m0 40h-68a12 12 0 0 0 0 24h68a12 12 0 0 0 0-24m0 40h-68a12 12 0 0 0 0 24h68a12 12 0 0 0 0-24" />
      </G>
    </Svg>
  );
};