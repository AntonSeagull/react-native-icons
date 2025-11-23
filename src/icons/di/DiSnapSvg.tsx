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

export const DiSnapSvg = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#444" d="m15.99 25.903-4.018-1.96.005-.002h-.001l-4.269 2.082 8.286 4.041 8.299-4.032-4.284-2.122zm-8.272.133v-4.165l4.108-2.004 4.225 2.084zm12.831-17.14v6.585l-4.593 2.239 4.224 2.103 4.112-2.003V6.557zm3.744 17.137v-4.165l-12.831-6.39V8.893L7.719 6.554v11.263zM11.45 8.886zl4.543-2.216 4.544 2.216 3.738-2.336-8.285-4.041-8.283 4.043 3.739 2.337z" />
      </G>
    </Svg>
  );
};