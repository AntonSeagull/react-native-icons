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

export const PiUserFocusThin = (props: IconProps) => {
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
        <Path d="M220 40v36a4 4 0 0 1-8 0V44h-32a4 4 0 0 1 0-8h36a4 4 0 0 1 4 4m-4 136a4 4 0 0 0-4 4v32h-32a4 4 0 0 0 0 8h36a4 4 0 0 0 4-4v-36a4 4 0 0 0-4-4M76 212H44v-32a4 4 0 0 0-8 0v36a4 4 0 0 0 4 4h36a4 4 0 0 0 0-8M40 80a4 4 0 0 0 4-4V44h32a4 4 0 0 0 0-8H40a4 4 0 0 0-4 4v36a4 4 0 0 0 4 4m136 92a4 4 0 0 1-3.2-1.6 56 56 0 0 0-89.6 0 4 4 0 1 1-6.4-4.8 63.65 63.65 0 0 1 32.5-22.85 36 36 0 1 1 37.4 0 63.65 63.65 0 0 1 32.5 22.85 4 4 0 0 1-3.2 6.4m-48-32a28 28 0 1 0-28-28 28 28 0 0 0 28 28" />
      </G>
    </Svg>
  );
};