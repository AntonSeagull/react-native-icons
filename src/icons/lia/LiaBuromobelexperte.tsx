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

export const LiaBuromobelexperte = (props: IconProps) => {
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
        <Path d="M5 5v6h6V5zm8 0v6h6V5zm8 0v6h6V5zM7 7h2v2H7zm8 0h2v2h-2zm8 0h2v2h-2zM5 13v6h6v-6zm8 0v6h6v-6zm8 0v6h6v-6zM7 15h2v2H7zm8 0h2v2h-2zm8 0h2v2h-2zM5 21v6h6v-6zm8 0v6h6v-6zm8 0v6h6v-6zM7 23h2v2H7zm8 0h2v2h-2z" />
      </G>
    </Svg>
  );
};