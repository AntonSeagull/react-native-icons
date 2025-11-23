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

export const RiSeedlingFill = (props: IconProps) => {
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
        <Path d="M21.998 7v2.5a6.5 6.5 0 0 1-6.5 6.5h-2.5v5h-2v-7l.019-1a6.5 6.5 0 0 1 6.481-6zm-16-4a7 7 0 0 1 6.643 4.786A7.48 7.48 0 0 0 10.014 13H8.998a7 7 0 0 1-7-7V3z" />
      </G>
    </Svg>
  );
};