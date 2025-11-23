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

export const PiNumberThreeFill = (props: IconProps) => {
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
        <Path d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-76 168a43.85 43.85 0 0 1-34.22-16.34 8 8 0 0 1 12.44-10.06A28 28 0 1 0 126 120.07a8 8 0 0 1-5.58-13.1l22.48-27H96a8 8 0 0 1 0-16h64a8 8 0 0 1 6.15 13.12l-25.23 30.27A44 44 0 0 1 124 192" />
      </G>
    </Svg>
  );
};