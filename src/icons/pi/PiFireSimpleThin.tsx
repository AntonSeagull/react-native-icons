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

export const PiFireSimpleThin = (props: IconProps) => {
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
        <Path d="M140.82 20.92a4 4 0 0 0-6.31 1.71l-24.15 66.2-28.55-27.7a4 4 0 0 0-6 .44C54.71 89.25 44 117 44 144a84 84 0 0 0 168 0c0-57.76-49.78-105.31-71.18-123.08M128 220a76.08 76.08 0 0 1-76-76c0-24.07 9.25-48.93 27.5-74l29.71 28.83a4 4 0 0 0 6.55-1.5l24.3-66.6C162.27 50.09 204 93.18 204 144a76.08 76.08 0 0 1-76 76" />
      </G>
    </Svg>
  );
};