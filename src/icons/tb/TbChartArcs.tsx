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

export const TbChartArcs = (props: IconProps) => {
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
        <Path d="M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
        <Path d="M16.924 11.132a5 5 0 1 0-4.056 5.792" />
        <Path d="M3 12a9 9 0 1 0 9-9" />
      </G>
    </Svg>
  );
};