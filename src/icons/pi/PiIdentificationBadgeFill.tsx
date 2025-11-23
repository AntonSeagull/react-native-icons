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

export const PiIdentificationBadgeFill = (props: IconProps) => {
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
        <Path d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16M96 48h64a8 8 0 0 1 0 16H96a8 8 0 0 1 0-16m84.81 150.4a8 8 0 0 1-11.21-1.6 52 52 0 0 0-83.2 0 8 8 0 1 1-12.8-9.6 67.9 67.9 0 0 1 27.4-21.69 40 40 0 1 1 53.94 0 67.9 67.9 0 0 1 27.46 21.69 8 8 0 0 1-1.59 11.2M152 136a24 24 0 1 1-24-24 24 24 0 0 1 24 24" />
      </G>
    </Svg>
  );
};