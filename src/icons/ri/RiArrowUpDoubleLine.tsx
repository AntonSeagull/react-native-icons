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

export const RiArrowUpDoubleLine = (props: IconProps) => {
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
        <Path d="m12 4.836-6.207 6.207 1.414 1.414L12 7.664l4.793 4.793 1.414-1.414zm0 5.65-6.207 6.207 1.414 1.414L12 13.314l4.793 4.793 1.414-1.414z" />
      </G>
    </Svg>
  );
};