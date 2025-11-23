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

export const SiNamebase = (props: IconProps) => {
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
        <Path d="M23.098 2.406c0 1.329-1.052 2.406-2.349 2.406S18.4 3.735 18.4 2.406 19.452 0 20.75 0s2.348 1.077 2.348 2.406m-11.51.542C5.688 2.948.903 7.848.903 13.894V24H7.48V13.895c0-2.326 1.84-4.21 4.11-4.21s4.11 1.884 4.11 4.21V24h6.577V13.895c0-6.046-4.785-10.947-10.687-10.947" />
      </G>
    </Svg>
  );
};