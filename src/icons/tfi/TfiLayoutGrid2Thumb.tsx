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

export const TfiLayoutGrid2Thumb = (props: IconProps) => {
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
        <Path d="M0 2h3v3H0zm9 3h3V2H9zm-9 8h3v-3H0zm9 0h3v-3H9zM4 3h4V2H4zm0 2h4V4H4zm9-3v1h4V2zm0 3h4V4h-4zm-6 .999H4v1h3zm9 0h-3v1h3zM4 11h4v-1H4zm0 2h4v-1H4zm9-2h4v-1h-4zm0 2h4v-1h-4zm-9 1.999h3v-1H4zm9 0h3v-1h-3z" />
      </G>
    </Svg>
  );
};