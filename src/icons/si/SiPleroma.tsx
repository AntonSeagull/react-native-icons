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

export const SiPleroma = (props: IconProps) => {
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
        <Path d="M6.36 0a1.87 1.87 0 0 0-1.87 1.868V24h5.964V0zm7.113 0v12h4.168a1.87 1.87 0 0 0 1.868-1.868V0zm0 18.036V24h4.168a1.87 1.87 0 0 0 1.868-1.868v-4.096Z" />
      </G>
    </Svg>
  );
};