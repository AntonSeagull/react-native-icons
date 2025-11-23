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

export const TbClockHour2Filled = (props: IconProps) => {
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
        <Path d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34M11 7v5.022l.003.054.02.135.005.025a1 1 0 0 0 .056.165l.04.082.062.099.07.087.075.074.094.075.08.052.07.035.132.051.135.031.082.01.124.002.113-.012.108-.024.106-.036.108-.051.065-.04 3.007-2.004a1 1 0 1 0-1.11-1.664L13 10.13V7a1 1 0 0 0-.883-.993L12 6a1 1 0 0 0-1 1" />
      </G>
    </Svg>
  );
};