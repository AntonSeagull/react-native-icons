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

export const LiaKickstarterK = (props: IconProps) => {
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
        <Path d="M11 5a3 3 0 0 0-3 3v16a3 3 0 1 0 6 0v-4.586l5.742 6.563A3 3 0 0 0 22.002 27a2.999 2.999 0 0 0 2.256-4.975l-5.399-6.17L23.4 9.801a3.001 3.001 0 0 0-4.8-3.602L14 12.334V8a3 3 0 0 0-3-3" />
      </G>
    </Svg>
  );
};