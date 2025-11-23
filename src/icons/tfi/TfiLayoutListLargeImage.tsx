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

export const TfiLayoutListLargeImage = (props: IconProps) => {
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
        <Path d="M16.497 5H14V4h2.497zm-.998 2.996H14v1h1.499zm-1.495-1.998v1H17v-1zM14 10.993h2.996v-1H14zM14 13h2.497v-1H14zM0 4h13v9H0zm1 8h11V5H1z" />
      </G>
    </Svg>
  );
};