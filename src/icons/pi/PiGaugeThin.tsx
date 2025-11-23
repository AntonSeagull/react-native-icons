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

export const PiGaugeThin = (props: IconProps) => {
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
        <Path d="M204.23 75.5A107.37 107.37 0 0 0 127.62 44C68.28 44.21 20 93.16 20 153.13V176a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12v-24a107.25 107.25 0 0 0-31.77-76.5M228 176a4 4 0 0 1-4 4H111.85l59.38-81.65a4 4 0 1 0-6.46-4.7L102 180H32a4 4 0 0 1-4-4v-22.87a103 103 0 0 1 .84-13.13H56a4 4 0 0 0 0-8H30.21C39.59 87.66 77.84 53.93 124 52.09V80a4 4 0 0 0 8 0V52.08A100.08 100.08 0 0 1 226 132h-26a4 4 0 0 0 0 8h27.29a102 102 0 0 1 .71 12Z" />
      </G>
    </Svg>
  );
};