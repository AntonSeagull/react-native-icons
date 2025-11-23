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

export const SiPocketcasts = (props: IconProps) => {
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
        <Path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0m3.564 12A3.564 3.564 0 1 0 12 15.564V17.6a5.6 5.6 0 1 1 5.6-5.6zM19 12a7 7 0 1 0-7 7v2.333a9.333 9.333 0 1 1 0-18.666A9.333 9.333 0 0 1 21.333 12z" />
      </G>
    </Svg>
  );
};