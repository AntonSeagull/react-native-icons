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

export const TfiList = (props: IconProps) => {
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
        <Path d="M17 4v1H5V4zM3 4.5C3 5.327 2.327 6 1.5 6S0 5.327 0 4.5.673 3 1.5 3 3 3.673 3 4.5m-1 0a.5.5 0 1 0-1.002.002A.5.5 0 0 0 2 4.5M5 9h12V8H5zm-2-.5c0 .827-.673 1.5-1.5 1.5S0 9.327 0 8.5.673 7 1.5 7 3 7.673 3 8.5m-1 0a.5.5 0 1 0-1.002.002A.5.5 0 0 0 2 8.5M5 13h12v-1H5zm-2-.5c0 .827-.673 1.5-1.5 1.5S0 13.327 0 12.5.673 11 1.5 11s1.5.673 1.5 1.5m-1 0a.5.5 0 1 0-1.002.002A.5.5 0 0 0 2 12.5" />
      </G>
    </Svg>
  );
};