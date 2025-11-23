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

export const PiFilmReelThin = (props: IconProps) => {
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
        <Path d="M232 220h-64.82a100 100 0 1 0-39.18 8h104a4 4 0 0 0 0-8M36 128a92 92 0 1 1 92 92 92.1 92.1 0 0 1-92-92m92-28a20 20 0 1 0-20-20 20 20 0 0 0 20 20m0-32a12 12 0 1 1-12 12 12 12 0 0 1 12-12m20 108a20 20 0 1 0-20 20 20 20 0 0 0 20-20m-32 0a12 12 0 1 1 12 12 12 12 0 0 1-12-12m60-28a20 20 0 1 0-20-20 20 20 0 0 0 20 20m0-32a12 12 0 1 1-12 12 12 12 0 0 1 12-12m-96-8a20 20 0 1 0 20 20 20 20 0 0 0-20-20m0 32a12 12 0 1 1 12-12 12 12 0 0 1-12 12" />
      </G>
    </Svg>
  );
};