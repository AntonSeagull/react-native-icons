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

export const TbAnalyzeOff = (props: IconProps) => {
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
        <Path d="M20 11a8.1 8.1 0 0 0-6.986-6.918 8.1 8.1 0 0 0-4.31.62M6.321 6.31A8 8 0 0 0 4.995 8M4 13a8.1 8.1 0 0 0 13.687 4.676M20 16a1 1 0 0 0-1-1" />
        <Path d="M4 8a1 1 0 1 0 2 0 1 1 0 1 0-2 0M9.888 9.87a3 3 0 1 0 4.233 4.252m.595-3.397A3 3 0 0 0 13.29 9.29M3 3l18 18" />
      </G>
    </Svg>
  );
};