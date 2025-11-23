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

export const LiaCitySolid = (props: IconProps) => {
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
        <Path d="m10 3.883-7 3.5V28h26V10H17V7.383zm0 2.234 5 2.5V26H5V8.617zM7 10v2h2v-2zm4 0v2h2v-2zm6 2h10v14H17zM7 14v2h2v-2zm4 0v2h2v-2zm8 0v2h2v-2zm4 0v2h2v-2zM7 18v2h2v-2zm4 0v2h2v-2zm8 0v2h2v-2zm4 0v2h2v-2zM7 22v2h2v-2zm4 0v2h2v-2zm8 0v2h2v-2zm4 0v2h2v-2z" />
      </G>
    </Svg>
  );
};