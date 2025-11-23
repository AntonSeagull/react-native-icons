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

export const CiGlass = (props: IconProps) => {
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
        <Path d="M18.279 2.54a1.48 1.48 0 0 0-1.1-.48H6.819a1.47 1.47 0 0 0-1.09.48 1.5 1.5 0 0 0-.41 1.12l1.06 15.94a2.51 2.51 0 0 0 2.49 2.34h6.26a2.52 2.52 0 0 0 2.5-2.34l1.05-15.94a1.5 1.5 0 0 0-.4-1.12m-1.65 16.99a1.51 1.51 0 0 1-1.5 1.41h-6.26a1.506 1.506 0 0 1-1.49-1.41l-.64-9.62a3 3 0 0 0 1.17-.49 1.83 1.83 0 0 1 1.18-.39 1.86 1.86 0 0 1 1.19.39 3.025 3.025 0 0 0 3.45 0 1.88 1.88 0 0 1 1.19-.39 1.83 1.83 0 0 1 1.18.39 3 3 0 0 0 1.16.49Zm.7-10.62a2.3 2.3 0 0 1-.69-.33 2.98 2.98 0 0 0-3.45 0 1.9 1.9 0 0 1-1.18.38 1.94 1.94 0 0 1-1.19-.38 2.82 2.82 0 0 0-1.73-.55 2.8 2.8 0 0 0-1.72.55 2.4 2.4 0 0 1-.7.33l-.35-5.32a.47.47 0 0 1 .14-.37.48.48 0 0 1 .36-.16h10.36a.52.52 0 0 1 .37.16.46.46 0 0 1 .13.37Z" />
      </G>
    </Svg>
  );
};