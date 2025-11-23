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

export const PiChalkboardThin = (props: IconProps) => {
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
        <Path d="M240 196h-12V56a12 12 0 0 0-12-12H40a12 12 0 0 0-12 12v140H16a4 4 0 0 0 0 8h224a4 4 0 0 0 0-8M36 56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4v140h-24v-28a4 4 0 0 0-4-4h-72a4 4 0 0 0-4 4v28H68V84h120v52a4 4 0 0 0 8 0V80a4 4 0 0 0-4-4H64a4 4 0 0 0-4 4v116H36Zm152 140h-64v-24h64Z" />
      </G>
    </Svg>
  );
};