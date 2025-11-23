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

export const PiBehanceLogoThin = (props: IconProps) => {
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
        <Path d="M108.16 122.74A34 34 0 0 0 90 60H32a4 4 0 0 0-4 4v128a4 4 0 0 0 4 4h62a38 38 0 0 0 14.16-73.26M36 68h54a26 26 0 0 1 0 52H36Zm58 120H36v-60h58a30 30 0 0 1 0 60m70-108a4 4 0 0 1 4-4h64a4 4 0 0 1 0 8h-64a4 4 0 0 1-4-4m36 28a44 44 0 1 0 35.2 70.41 4 4 0 0 0-6.4-4.81 36 36 0 0 1-64.58-17.6H240a4 4 0 0 0 4-4 44.05 44.05 0 0 0-44-44m-35.78 40a36 36 0 0 1 71.56 0Z" />
      </G>
    </Svg>
  );
};