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

export const RiSparkling2Fill = (props: IconProps) => {
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
        <Path d="m17 1.208 1.32 2.473L20.792 5 18.32 6.319 17 8.792l-1.318-2.473-2.473-1.32 2.473-1.318zM8 4.333l2.667 5 5 2.667-5 2.667-2.666 5-2.667-5-5-2.667 5-2.667zm11.667 12-1.666-3.125-1.667 3.125L13.209 18l3.125 1.667 1.667 3.125 1.666-3.125L22.792 18z" />
      </G>
    </Svg>
  );
};