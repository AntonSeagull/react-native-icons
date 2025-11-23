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

export const LiaVenusSolid = (props: IconProps) => {
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
        <Path d="M16 3c-4.406 0-8 3.594-8 8 0 4.066 3.066 7.438 7 7.938V23h-4v2h4v4h2v-4h4v-2h-4v-4.062c3.934-.5 7-3.872 7-7.938 0-4.406-3.594-8-8-8m0 2c3.324 0 6 2.676 6 6s-2.676 6-6 6-6-2.676-6-6 2.676-6 6-6" />
      </G>
    </Svg>
  );
};