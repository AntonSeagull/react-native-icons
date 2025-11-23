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

export const PiCardsThreeFill = (props: IconProps) => {
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
        <Path d="M224 104v96a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-96a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16M56 72h144a8 8 0 0 0 0-16H56a8 8 0 0 0 0 16m16-32h112a8 8 0 0 0 0-16H72a8 8 0 0 0 0 16" />
      </G>
    </Svg>
  );
};