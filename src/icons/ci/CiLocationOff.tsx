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

export const CiLocationOff = (props: IconProps) => {
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
        <Path d="M18.2 14.462a.5.5 0 0 1-.417-.775 6.8 6.8 0 0 0 1.048-4.627 6.91 6.91 0 0 0-6.022-5.946 6.83 6.83 0 0 0-4.557 1.061.5.5 0 1 1-.545-.838 7.882 7.882 0 0 1 10.909 10.9.5.5 0 0 1-.416.225M4 3.3a.5.5 0 0 0-.7.7l1.92 1.92a7.8 7.8 0 0 0-1.11 4.03 7.88 7.88 0 0 0 1.44 4.55l5.06 6.74a1.72 1.72 0 0 0 1.39.69 1.7 1.7 0 0 0 1.38-.69l3.06-4.09c.5.49.99.99 1.48 1.48.7.69 1.39 1.38 2.08 2.07.45.46 1.16-.25.7-.71Zm8.58 17.34a.73.73 0 0 1-.58.29.75.75 0 0 1-.59-.29l-5.05-6.73a6.9 6.9 0 0 1-.41-7.26q1.5 1.515 3.01 3.01 3.39 3.39 6.77 6.78Z" />
      </G>
    </Svg>
  );
};