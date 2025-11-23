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

export const SiCloudera = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m.344 20.251a8.25 8.25 0 1 1 0-16.502 8.2 8.2 0 0 1 5.633 2.234L15.519 8.53a4.69 4.69 0 0 0-3.175-1.239 4.709 4.709 0 1 0 3.284 8.081l2.657 2.346a8.22 8.22 0 0 1-5.941 2.533" />
      </G>
    </Svg>
  );
};