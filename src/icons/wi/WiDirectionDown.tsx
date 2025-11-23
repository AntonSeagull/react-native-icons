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

export const WiDirectionDown = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 30 30"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 15, 15)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M11.77 16.47c0 .22.08.4.25.55l2.4 2.45c.16.16.35.23.58.23.24 0 .43-.08.59-.23l2.4-2.45c.16-.14.24-.33.24-.55s-.08-.41-.23-.57-.34-.23-.56-.23-.42.08-.57.23l-1.06 1.05v-6.59c0-.22-.08-.41-.24-.56-.15-.14-.34-.22-.57-.22s-.42.07-.58.22-.24.34-.24.56v6.59l-1.06-1.05a.74.74 0 0 0-.55-.23c-.22 0-.42.08-.57.23s-.23.35-.23.57" />
      </G>
    </Svg>
  );
};