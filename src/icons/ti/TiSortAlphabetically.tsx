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

export const TiSortAlphabetically = (props: IconProps) => {
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
        <Path d="m10.895 16.553-4-8c-.339-.678-1.45-.678-1.789 0l-4 8a1 1 0 0 0 1.789.895L3.618 16h4.764l.724 1.447a1 1 0 0 0 1.341.448c.494-.248.695-.848.448-1.342M4.618 14 6 11.236 7.382 14zM22 18h-6a1.001 1.001 0 0 1-.8-1.6L20 10h-4a1 1 0 0 1 0-2h6a1.001 1.001 0 0 1 .8 1.6L18 16h4a1 1 0 0 1 0 2m-8-4h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2" />
      </G>
    </Svg>
  );
};