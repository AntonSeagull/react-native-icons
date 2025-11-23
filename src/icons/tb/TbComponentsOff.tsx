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

export const TbComponentsOff = (props: IconProps) => {
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
        <Path d="m3 12 3 3 3-3-3-3zM18.5 14.5 21 12l-3-3-2.5 2.5M12.499 8.501 15 6l-3-3-2.5 2.5M9 18l3 3 3-3-3-3zM3 3l18 18" />
      </G>
    </Svg>
  );
};