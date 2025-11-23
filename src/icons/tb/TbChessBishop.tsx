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

export const TbChessBishop = (props: IconProps) => {
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
        <Path d="m8 16-1.447.724a1 1 0 0 0-.553.894V20h12v-2.382a1 1 0 0 0-.553-.894L16 16zM11 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0M9.5 16C7.833 16 7 14.331 7 13q0-5.5 5-7c3.333 1 5 3.427 5 7 0 1.284-.775 2.881-2.325 3H9.5M15 8l-3 3M12 5v1" />
      </G>
    </Svg>
  );
};