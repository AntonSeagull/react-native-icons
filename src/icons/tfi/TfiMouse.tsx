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

export const TfiMouse = (props: IconProps) => {
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
        <Path d="M8.5 0A5.506 5.506 0 0 0 3 5.5v6C3 14.533 5.467 17 8.5 17s5.5-2.467 5.5-5.5v-6C14 2.467 11.533 0 8.5 0M13 11.5c0 2.481-2.019 4.5-4.5 4.5S4 13.981 4 11.5v-6C4 3.019 6.019 1 8.5 1S13 3.019 13 5.5zm-4.5-8C7.673 3.5 7 4.173 7 5v2c0 .827.673 1.5 1.5 1.5S10 7.827 10 7V5c0-.827-.673-1.5-1.5-1.5M9 7a.5.5 0 0 1-1 0V5a.5.5 0 0 1 1 0z" />
      </G>
    </Svg>
  );
};