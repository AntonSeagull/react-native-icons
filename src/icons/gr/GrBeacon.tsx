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

export const GrBeacon = (props: IconProps) => {
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
        <Path stroke="#000" strokeWidth={2} d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 0v11M7.05 4.05A6.98 6.98 0 0 0 5 9c0 1.933.784 3.683 2.05 4.95m9.9 0A6.98 6.98 0 0 0 19 9a6.98 6.98 0 0 0-2.05-4.95M4.222 1.222A10.97 10.97 0 0 0 1 9c0 3.037 1.231 5.787 3.222 7.778m15.556 0A10.97 10.97 0 0 0 23 9c0-3.038-1.231-5.788-3.222-7.778" />
      </G>
    </Svg>
  );
};