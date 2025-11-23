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

export const PiBeachBallLight = (props: IconProps) => {
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
        <Path d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m85 72.45a198 198 0 0 0-46.09-9.37A198 198 0 0 0 157.55 43 90.47 90.47 0 0 1 213 98.45m-69.48-59.11a186.6 186.6 0 0 1 10.11 39 198.5 198.5 0 0 0-58.48-34.13 90.17 90.17 0 0 1 48.37-4.87M80.15 51.81A186.1 186.1 0 0 1 147 88.47a198.3 198.3 0 0 0-108.92 35 90.05 90.05 0 0 1 42.07-71.66M38.55 138a186.16 186.16 0 0 1 117-37.46 186.16 186.16 0 0 1-37.46 117A90.18 90.18 0 0 1 38.55 138m94 79.94a198.33 198.33 0 0 0 35-108.93 186.2 186.2 0 0 1 36.66 66.89 90.05 90.05 0 0 1-71.66 41.99Zm79.24-57a198.5 198.5 0 0 0-34.11-58.48 186.6 186.6 0 0 1 39 10.11 90.17 90.17 0 0 1-4.87 48.37Z" />
      </G>
    </Svg>
  );
};