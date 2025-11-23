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

export const PiGpsLight = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M240 122h-26.23A86.12 86.12 0 0 0 134 42.23V16a6 6 0 0 0-12 0v26.23A86.12 86.12 0 0 0 42.23 122H16a6 6 0 0 0 0 12h26.23A86.12 86.12 0 0 0 122 213.77V240a6 6 0 0 0 12 0v-26.23A86.12 86.12 0 0 0 213.77 134H240a6 6 0 0 0 0-12m-112 80a74 74 0 1 1 74-74 74.09 74.09 0 0 1-74 74" />
      </G>
    </Svg>
  );
};