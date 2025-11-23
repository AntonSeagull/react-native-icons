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

export const PiBuildingApartmentThin = (props: IconProps) => {
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
        <Path d="M240 212h-12V72a4 4 0 0 0-4-4h-44V40a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4v60H32a4 4 0 0 0-4 4v108H16a4 4 0 0 0 0 8h224a4 4 0 0 0 0-8M36 108h44a4 4 0 0 0 4-4V44h88v28a4 4 0 0 0 4 4h44v136h-72v-44a4 4 0 0 0-4-4h-32a4 4 0 0 0-4 4v44H36Zm104 104h-24v-40h24ZM116 72a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4m0 32a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4m56 0a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4m-88 32a4 4 0 0 1-4 4H64a4 4 0 0 1 0-8h16a4 4 0 0 1 4 4m0 32a4 4 0 0 1-4 4H64a4 4 0 0 1 0-8h16a4 4 0 0 1 4 4m32-32a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4m56 0a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4m0 32a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4" />
      </G>
    </Svg>
  );
};