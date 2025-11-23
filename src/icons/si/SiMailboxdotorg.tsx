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

export const SiMailboxdotorg = (props: IconProps) => {
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
        <Path d="M2.229 22.844H24V10.501l-8.628 5.882c-.613.419-1.226-.003-1.226-.003L0 6.646v13.969s0 2.229 2.229 2.229m12.558-9.273L24 7.261V1.156H2.229S0 1.156 0 3.384v.06z" />
      </G>
    </Svg>
  );
};