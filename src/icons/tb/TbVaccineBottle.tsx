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

export const TbVaccineBottle = (props: IconProps) => {
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
        <Path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zM10 6v.98c0 .877-.634 1.626-1.5 1.77S7 9.643 7 10.52V19a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-8.48c0-.877-.634-1.626-1.5-1.77A1.795 1.795 0 0 1 14 6.98V6M7 12h10M7 18h10M11 15h2" />
      </G>
    </Svg>
  );
};