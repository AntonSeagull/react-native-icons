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

export const TbChartCircles = (props: IconProps) => {
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
        <Path d="M4 9.5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 1 0-11 0" />
        <Path d="M9 14.5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 1 0-11 0" />
      </G>
    </Svg>
  );
};