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

export const TbCalculatorFilled = (props: IconProps) => {
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
        <Path d="M18 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zM8 17a1 1 0 0 0-1 1l.007.127A1 1 0 0 0 9 18.01l-.007-.127A1 1 0 0 0 8 17m4 0a1 1 0 0 0-1 1l.007.127A1 1 0 0 0 13 18.01l-.007-.127A1 1 0 0 0 12 17m4 0a1 1 0 0 0-1 1l.007.127A1 1 0 0 0 17 18.01l-.007-.127A1 1 0 0 0 16 17m-8-4a1 1 0 0 0-1 1l.007.127A1 1 0 0 0 9 14.01l-.007-.127A1 1 0 0 0 8 13m4 0a1 1 0 0 0-1 1l.007.127A1 1 0 0 0 13 14.01l-.007-.127A1 1 0 0 0 12 13m4 0a1 1 0 0 0-1 1l.007.127A1 1 0 0 0 17 14.01l-.007-.127A1 1 0 0 0 16 13m-1-7H9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2" />
      </G>
    </Svg>
  );
};