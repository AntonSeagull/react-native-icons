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

export const TbArrowGuideFilled = (props: IconProps) => {
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
        <Path d="m18.707 3.293 3 3q.054.053.097.112l.071.11.054.114.035.105.03.148L22 7l-.003.075-.017.126-.03.111-.044.111-.052.098-.067.096-.08.09-3 3a1 1 0 0 1-1.414-1.414L18.585 8H14a1 1 0 0 0-1 1v8a3 3 0 0 1-3 3H7.829A3.001 3.001 0 0 1 2 19l.005-.176A3 3 0 0 1 7.83 18H10a1 1 0 0 0 1-1V9a3 3 0 0 1 3-3h4.585l-1.292-1.293a1 1 0 0 1-.083-1.32l.083-.094a1 1 0 0 1 1.414 0" />
      </G>
    </Svg>
  );
};