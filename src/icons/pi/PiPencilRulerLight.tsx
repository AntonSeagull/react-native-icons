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

export const PiPencilRulerLight = (props: IconProps) => {
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
        <Path d="M208 34h-48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h48a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2h-48a2 2 0 0 1-2-2v-34h26a6 6 0 0 0 0-12h-26v-28h26a6 6 0 0 0 0-12h-26V94h26a6 6 0 0 0 0-12h-26V48a2 2 0 0 1 2-2h48a2 2 0 0 1 2 2ZM76.24 27.76a6 6 0 0 0-8.48 0l-32 32A6 6 0 0 0 34 64v144a14 14 0 0 0 14 14h48a14 14 0 0 0 14-14V64a6 6 0 0 0-1.76-4.24ZM46 178V78h20v100ZM78 78h20v100H78Zm-6-37.51L97.51 66h-51ZM96 210H48a2 2 0 0 1-2-2v-18h52v18a2 2 0 0 1-2 2" />
      </G>
    </Svg>
  );
};