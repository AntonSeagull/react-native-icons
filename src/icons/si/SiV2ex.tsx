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

export const SiV2ex = (props: IconProps) => {
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
        <Path d="M.671 1.933h13.821a1.34 1.34 0 0 1 .98.425l8.166 8.725a1.34 1.34 0 0 1 0 1.834l-8.166 8.724a1.34 1.34 0 0 1-.98.426H.673A.67.67 0 0 1 0 21.395v-6.878h13.19l2.276-2.28a.336.336 0 0 0 0-.474l-2.276-2.28H0V2.604a.67.67 0 0 1 .671-.671" />
      </G>
    </Svg>
  );
};