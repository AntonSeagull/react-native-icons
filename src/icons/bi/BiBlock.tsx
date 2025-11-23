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

export const BiBlock = (props: IconProps) => {
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
        <Path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2M4 12c0-1.846.634-3.542 1.688-4.897l11.209 11.209A7.95 7.95 0 0 1 12 20c-4.411 0-8-3.589-8-8m14.312 4.897L7.103 5.688A7.95 7.95 0 0 1 12 4c4.411 0 8 3.589 8 8a7.95 7.95 0 0 1-1.688 4.897" />
      </G>
    </Svg>
  );
};