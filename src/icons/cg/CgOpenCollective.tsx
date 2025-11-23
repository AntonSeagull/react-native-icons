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

export const CgOpenCollective = (props: IconProps) => {
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
        <Path fill="currentColor" fillOpacity={0.5} d="m16.682 15.753 2.13 2.13A8.97 8.97 0 0 0 21 12a8.96 8.96 0 0 0-2.123-5.806l-2.133 2.133A5.97 5.97 0 0 1 18 12c0 1.42-.493 2.725-1.318 3.753" />
        <Path fill="currentColor" d="M15.673 16.745a6 6 0 1 1 .08-9.426l2.13-2.13a9 9 0 1 0-.077 13.689z" />
      </G>
    </Svg>
  );
};