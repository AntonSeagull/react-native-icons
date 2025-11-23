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

export const HiMiniBoltSlash = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 10, 10)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="M2.22 2.22a.75.75 0 0 1 1.06 0l14.5 14.5a.75.75 0 1 1-1.06 1.06L2.22 3.28a.75.75 0 0 1 0-1.06" clipRule="evenodd" />
        <Path d="M4.73 7.912 2.191 10.75A.75.75 0 0 0 2.75 12h6.068zm4.503 4.503-1.216 5.678a.75.75 0 0 0 1.292.657l2.956-3.303zm6.037-.327 2.539-2.838A.75.75 0 0 0 17.25 8h-6.068zm-4.503-4.503 1.216-5.678a.75.75 0 0 0-1.292-.657L7.735 4.553z" />
      </G>
    </Svg>
  );
};