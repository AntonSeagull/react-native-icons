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

export const PiCityThin = (props: IconProps) => {
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
        <Path d="M240 212h-12V88a4 4 0 0 0-4-4h-64a4 4 0 0 0-4 4v44h-56V40a4 4 0 0 0-4-4H32a4 4 0 0 0-4 4v172H16a4 4 0 0 0 0 8h224a4 4 0 0 0 0-8M164 92h56v120h-56Zm-8 48v72h-56v-72ZM36 44h56v168H36Zm32 28v16a4 4 0 0 1-8 0V72a4 4 0 0 1 8 0m0 48v16a4 4 0 0 1-8 0v-16a4 4 0 0 1 8 0m0 48v16a4 4 0 0 1-8 0v-16a4 4 0 0 1 8 0m56 16v-16a4 4 0 0 1 8 0v16a4 4 0 0 1-8 0m64 0v-16a4 4 0 0 1 8 0v16a4 4 0 0 1-8 0m0-48v-16a4 4 0 0 1 8 0v16a4 4 0 0 1-8 0" />
      </G>
    </Svg>
  );
};