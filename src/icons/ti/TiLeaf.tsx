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

export const TiLeaf = (props: IconProps) => {
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
        <Path d="M20 11c0-4.9-3.499-9.1-8.32-9.983L11.5.983l-.18.033a10.15 10.15 0 0 0-.82 19.779V22a1 1 0 1 0 2 0v-1.205A10.15 10.15 0 0 0 20 11m-7.5 7.7v-2.993l4.354-4.354a.5.5 0 0 0-.707-.707L12.5 14.293v-3.586l2.354-2.354a.5.5 0 0 0-.707-.707L12.5 9.293V6a1 1 0 1 0-2 0v3.293L8.854 7.646a.5.5 0 0 0-.707.707l2.354 2.354v3.586l-3.646-3.646a.5.5 0 0 0-.707.707l4.354 4.354V18.7A8.144 8.144 0 0 1 11.5 3.019a8.145 8.145 0 0 1 1 15.681" />
      </G>
    </Svg>
  );
};