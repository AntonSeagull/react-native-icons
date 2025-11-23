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

export const RiMastercardLine = (props: IconProps) => {
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
        <Path d="M12.001 18.294a7.3 7.3 0 1 1 0-12.588 7.3 7.3 0 1 1 0 12.588m1.702-1.384a5.3 5.3 0 1 0 0-9.82A7.27 7.27 0 0 1 15.6 12c0 1.89-.719 3.614-1.898 4.91m-3.404-9.82a5.3 5.3 0 1 0 0 9.82A7.27 7.27 0 0 1 8.401 12c0-1.89.719-3.614 1.898-4.91m1.702 1.115a5.28 5.28 0 0 0-1.6 3.795c0 1.488.613 2.832 1.6 3.795a5.28 5.28 0 0 0 1.6-3.795 5.28 5.28 0 0 0-1.6-3.795" />
      </G>
    </Svg>
  );
};