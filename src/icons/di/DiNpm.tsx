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

export const DiNpm = (props: IconProps) => {
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
        <Path fill="#444" d="M.32 15.406v5.248h8.736v1.76h6.976v-1.76h15.649V10.159H.321zm8.735 0v3.488h-1.76v-5.216H5.598v5.216H2.016v-6.976h7.039zm8.724.006L17.76 18.9l-3.425-.012v1.766h-3.582v-8.736h7.039l-.012 3.494zm12.204-.006v3.488h-1.76v-5.216h-1.76v5.248l-1.76-.038v-5.21h-1.697v5.216h-3.519v-6.976h10.495v3.488zm-15.648 0v1.728h1.634v-3.457h-1.634v1.728z" />
      </G>
    </Svg>
  );
};