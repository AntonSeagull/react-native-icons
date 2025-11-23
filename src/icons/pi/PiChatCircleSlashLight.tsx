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

export const PiChatCircleSlashLight = (props: IconProps) => {
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
        <Path d="M52.44 36a6 6 0 0 0-8.88 8l11.51 12.7a102 102 0 0 0-16.72 120l-11.62 34.86a14 14 0 0 0 17.71 17.71l34.87-11.62A102 102 0 0 0 192 207.37L203.56 220a6 6 0 0 0 8.88-8.08ZM128 218a90 90 0 0 1-45.06-12.08 6 6 0 0 0-4.91-.5l-37.38 12.46a2 2 0 0 1-2.53-2.53L50.58 178a6 6 0 0 0-.5-4.91A90 90 0 0 1 63.16 65.6L184 198.47A89.74 89.74 0 0 1 128 218m102-90a102.25 102.25 0 0 1-12.14 48.31 6 6 0 0 1-5.29 3.15 6 6 0 0 1-5.28-8.84A90.05 90.05 0 0 0 93.1 45a6 6 0 0 1-4.65-11A102.06 102.06 0 0 1 230 128" />
      </G>
    </Svg>
  );
};