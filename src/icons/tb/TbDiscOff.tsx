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

export const TbDiscOff = (props: IconProps) => {
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
        <Path d="M20.044 16.04A9 9 0 0 0 7.962 3.955M5.629 5.643A9 9 0 0 0 12 21c2.491 0 4.73-1 6.36-2.631" />
        <Path d="M11.298 11.288a1 1 0 1 0 1.402 1.427M7 12c0-1.38.559-2.629 1.462-3.534m2.607-1.38Q11.522 7.001 12 7M12 17a4.99 4.99 0 0 0 3.551-1.48m1.362-2.587q.086-.454.087-.933M3 3l18 18" />
      </G>
    </Svg>
  );
};