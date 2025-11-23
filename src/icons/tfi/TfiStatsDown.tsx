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

export const TfiStatsDown = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M5.166 8.803.795 4.847l.67-.741 3.773 3.413 4.204-3.026 5.593 6.25V8.458h1v4.036h-4.036v-1h2.366L9.296 5.829zM0 16v1h17v-1z" />
      </G>
    </Svg>
  );
};