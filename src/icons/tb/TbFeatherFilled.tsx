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

export const TbFeatherFilled = (props: IconProps) => {
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
        <Path d="M8 9.585V16h6.414l-2.707 2.707a1 1 0 0 1-.112.097l-.11.071-.114.054-.105.035-.149.03L11 19H6.414l-1.707 1.707a1 1 0 1 1-1.414-1.414L5 17.584V13l.003-.075.017-.126.03-.111.044-.111.052-.098.067-.096.08-.09z" />
        <Path d="m19.414 11-3 3H11.5l2.914-3zM13 4.586v4.998l-3 3V7.585zM16.482 3A4.515 4.515 0 0 1 21 7.514a4.7 4.7 0 0 1-.239 1.487L15 9V3.24c.469-.158.968-.24 1.482-.24" />
      </G>
    </Svg>
  );
};