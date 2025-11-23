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

export const VscArrowCircleRight = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m8.08 5.369 2.14 2.14H4.468v1h5.68L8.08 10.574l.707.707 2.956-2.957v-.707L8.788 4.662z" />
        <Path d="M8 14A6 6 0 1 1 8 2a6 6 0 0 1 0 12m0-1A5 5 0 1 0 8 3a5 5 0 0 0 0 10" />
      </G>
    </Svg>
  );
};