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

export const TbChristmasBall = (props: IconProps) => {
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
        <Path d="M4 13a8 8 0 1 0 16 0 8 8 0 1 0-16 0" />
        <Path d="m11 5 1-2 1 2M4.512 10.161Q8.256 8.504 12 11q3.941 2.628 7.882.653M4.315 15.252Q8.157 13.438 12 16q3.439 2.292 6.878 1.081" />
      </G>
    </Svg>
  );
};