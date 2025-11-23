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

export const RiLetterSpacing2 = (props: IconProps) => {
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
        <Path d="M6.2 14h2.154l1.2-3h4.892l1.2 3H17.8L13 2h-2zM12 4.885 13.646 9h-3.292zM3 16v6h2v-2h14v2h2v-6h-2v2H5v-2z" />
      </G>
    </Svg>
  );
};