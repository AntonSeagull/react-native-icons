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

export const PiBuildingApartmentFill = (props: IconProps) => {
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
        <Path d="M240 208h-8V72a8 8 0 0 0-8-8h-40V40a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v56H32a8 8 0 0 0-8 8v104h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M80 176H64a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m0-32H64a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m64 64h-32v-40h32Zm-8-64h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m0-32h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m0-32h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m56 96h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m0-32h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m0-32h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16" />
      </G>
    </Svg>
  );
};