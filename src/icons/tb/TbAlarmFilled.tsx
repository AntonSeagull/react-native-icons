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

export const TbAlarmFilled = (props: IconProps) => {
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
        <Path d="M16 6.072a8 8 0 1 1-11.995 7.213L4 13l.005-.285A8 8 0 0 1 16 6.072M12 9a1 1 0 0 0-1 1v3l.007.117A1 1 0 0 0 12 14h2l.117-.007A1 1 0 0 0 15 13l-.007-.117A1 1 0 0 0 14 12h-1v-2l-.007-.117A1 1 0 0 0 12 9" />
        <Path d="M6.412 3.191A1 1 0 0 1 7.685 4.73l-.097.08-2.75 2a1 1 0 0 1-1.273-1.54l.097-.08 2.75-2zM16.191 3.412a1 1 0 0 1 1.291-.288l.106.067 2.75 2a1 1 0 0 1-1.07 1.685l-.106-.067-2.75-2a1 1 0 0 1-.22-1.397z" />
      </G>
    </Svg>
  );
};