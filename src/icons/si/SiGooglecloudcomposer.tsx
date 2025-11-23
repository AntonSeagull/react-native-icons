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

export const SiGooglecloudcomposer = (props: IconProps) => {
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
        <Path d="M9.636 4.752h-6.42V0h17.556v4.728h-6.36v6.396H9.636zm-6.42 1.692h4.74v6.36h6.408V24H9.636v-6.42h-6.42zm12.84-.012h4.728V24h-4.728zM7.92 24H3.216v-4.728H7.92z" />
      </G>
    </Svg>
  );
};