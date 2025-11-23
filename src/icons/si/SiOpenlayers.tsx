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

export const SiOpenlayers = (props: IconProps) => {
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
        <Path d="M23.7 13.08a3.5 3.5 0 0 1-1.119 1.619l-7.426 6.196a5.14 5.14 0 0 1-6.317 0L1.412 14.7a3.6 3.6 0 0 1-1.12-1.62 3.3 3.3 0 0 0 1.12 3.639l7.426 6.196a5.14 5.14 0 0 0 6.317 0l7.426-6.196a3.3 3.3 0 0 0 1.12-3.639M8.838 1.086a5.14 5.14 0 0 1 6.317 0l7.426 6.196a3.298 3.298 0 0 1 0 5.258l-7.426 6.187a5.14 5.14 0 0 1-6.317 0L1.412 12.53a3.298 3.298 0 0 1 0-5.248z" />
      </G>
    </Svg>
  );
};