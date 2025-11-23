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

export const TfiPinAlt = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m5.404 10.889.707.707-5.258 5.257-.707-.707zM17 6.222l-2.192.637-3.682 5.246.429 1.118L10 14.778 2.222 7l1.556-1.556 1.118.429 5.245-3.682.248-.854L10.777 0zm-1.902-.488-3.832-3.831-.164.567-.098.338-5.97 4.19-1.009-.387L3.636 7 10 13.364l.389-.39-.195-.512-.191-.497.307-.436 3.883-5.534.338-.098z" />
      </G>
    </Svg>
  );
};