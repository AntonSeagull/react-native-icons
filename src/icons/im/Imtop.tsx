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

export const Imtop = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M14 11V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v8H0v3h16v-3zm-4 2H6v-1h4zm3-2H3V3.002L3.002 3h9.996l.002.002z" />
      </G>
    </Svg>
  );
};