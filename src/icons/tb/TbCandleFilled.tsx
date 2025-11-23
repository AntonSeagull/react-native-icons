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

export const TbCandleFilled = (props: IconProps) => {
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
        <Path d="M14 9a2 2 0 0 1 2 2v10a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V11a2 2 0 0 1 2-2zM11.254 1.334a1 1 0 0 1 1.491 0l1.452 1.623a3 3 0 0 1-4.196 4.28c-1.195-1.07-1.339-2.889-.297-4.166z" />
      </G>
    </Svg>
  );
};