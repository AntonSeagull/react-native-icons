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

export const TfiWrite = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M11.667 0H3.016v1.984H2.5c-.827 0-1.5.673-1.5 1.5v8.588l2.521 4.956 2.464-4.959V3.484c0-.827-.673-1.5-1.5-1.5h-.469V1H11v5h5v10H4.5v1H17V5.308zM3.908 14.002h-.804L2 11.832V5.984h1v6.027h1V5.984h.984v5.851zM4.984 3.484v1.5H2v-1.5c0-.275.225-.5.5-.5h1.984a.5.5 0 0 1 .5.5M12 1.742 15.273 5H12z" />
      </G>
    </Svg>
  );
};