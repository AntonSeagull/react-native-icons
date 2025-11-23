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

export const PiTextColumnsFill = (props: IconProps) => {
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
        <Path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M112 184H56a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16m0-32H56a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16m0-32H56a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16m0-32H56a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16m88 96h-56a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16m0-32h-56a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16m0-32h-56a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16m0-32h-56a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16" />
      </G>
    </Svg>
  );
};