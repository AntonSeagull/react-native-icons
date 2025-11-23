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

export const PiDresserThin = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M140 192a4 4 0 0 1-4 4h-16a4 4 0 0 1 0-8h16a4 4 0 0 1 4 4M120 68h16a4 4 0 0 0 0-8h-16a4 4 0 0 0 0 8m16 56h-16a4 4 0 0 0 0 8h16a4 4 0 0 0 0-8m76-84v176a12 12 0 0 1-12 12H56a12 12 0 0 1-12-12V40a12 12 0 0 1 12-12h144a12 12 0 0 1 12 12M52 156h152v-56H52Zm0-116v52h152V40a4 4 0 0 0-4-4H56a4 4 0 0 0-4 4m152 176v-52H52v52a4 4 0 0 0 4 4h144a4 4 0 0 0 4-4" />
      </G>
    </Svg>
  );
};