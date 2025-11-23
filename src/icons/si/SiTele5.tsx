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

export const SiTele5 = (props: IconProps) => {
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
        <Path d="M.006 0v5.027H3.83V0h-.685v4.18H2.23V.074h-.677V4.18h-.87V0H.007zm5.623.004v14.154h8.658V7.254h8.791V.004zM3.145 6.076v3.9H.005v.85H3.83v-4.75zM23 9.926 5.389 18.502c2.371 4.857 8.236 6.874 13.1 4.506v.002c4.863-2.37 6.883-8.227 4.511-13.084M.006 12.129v5.027H3.83V12.13h-.685v4.18H2.23v-4.106h-.677v4.106h-.87v-4.18H.007zm0 6.07v5.791h.687v-2.47H3.83v-.848H.693v-2.473z" />
      </G>
    </Svg>
  );
};