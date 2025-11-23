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

export const PiBarricadeLight = (props: IconProps) => {
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
        <Path d="M224 66H32a14 14 0 0 0-14 14v72a14 14 0 0 0 14 14h26v34a6 6 0 0 0 12 0v-34h116v34a6 6 0 0 0 12 0v-34h26a14 14 0 0 0 14-14V80a14 14 0 0 0-14-14m2 14v53.52L170.48 78H224a2 2 0 0 1 2 2M32 78h49.52l76 76h-55L30 81.52V80a2 2 0 0 1 2-2m-2 74V98.48L85.52 154H32a2 2 0 0 1-2-2m194 2h-49.52l-76-76h55L226 150.48V152a2 2 0 0 1-2 2" />
      </G>
    </Svg>
  );
};