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

export const SiProgress = (props: IconProps) => {
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
        <Path d="M23.235 6.825v11.997a.92.92 0 0 1-.419.725l-.393.235c-1.961 1.135-3.687 2.134-5.431 3.14V9.948L5.759 3.454C7.703 2.338 9.64 1.211 11.586.1a.93.93 0 0 1 .837 0l10.81 6.243v.482zm-8.741 4.562A9632 9632 0 0 0 6.8 6.943a.94.94 0 0 0-.837 0q-2.6 1.5-5.199 3.004l8.113 4.684V24c1.732-.999 3.46-2.006 5.197-2.995a.93.93 0 0 0 .419-.724zM.765 19.317l5.613 3.241V16.07Z" />
      </G>
    </Svg>
  );
};