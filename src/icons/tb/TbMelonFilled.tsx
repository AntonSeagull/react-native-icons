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

export const TbMelonFilled = (props: IconProps) => {
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
        <Path d="M16.77 2.62a1 1 0 0 1 1.436.055A10.96 10.96 0 0 1 21 10.001C21 16.075 16.075 21 10.001 21a10.97 10.97 0 0 1-7.684-3.127 1 1 0 0 1 .008-1.438l4.343-4.153a1 1 0 0 1 1.352-.027 3 3 0 0 0 4.32-4.133 1 1 0 0 1 .088-1.35z" />
      </G>
    </Svg>
  );
};