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

export const TiSocialTumbler = (props: IconProps) => {
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
        <Path d="M15.527 17.921v-2.066q-1.004.671-1.952.67-.446-.001-1.004-.277-.334-.225-.393-.503c-.11-.224-.178-.708-.178-1.454V11h3V9h-3V5.644h-1.772q-.223 1.172-.448 1.673-.277.615-.891 1.116a4 4 0 0 1-1.285.725V11H9v4.521q-.001.779.223 1.337.166.446.671.893.389.392 1.115.67.891.224 1.562.223.78 0 1.45-.167a5.8 5.8 0 0 0 1.506-.556" />
      </G>
    </Svg>
  );
};