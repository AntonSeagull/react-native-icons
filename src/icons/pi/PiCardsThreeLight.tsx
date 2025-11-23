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

export const PiCardsThreeLight = (props: IconProps) => {
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
        <Path d="M208 90H48a14 14 0 0 0-14 14v96a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14v-96a14 14 0 0 0-14-14m2 110a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-96a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2ZM50 64a6 6 0 0 1 6-6h144a6 6 0 0 1 0 12H56a6 6 0 0 1-6-6m16-32a6 6 0 0 1 6-6h112a6 6 0 0 1 0 12H72a6 6 0 0 1-6-6" />
      </G>
    </Svg>
  );
};