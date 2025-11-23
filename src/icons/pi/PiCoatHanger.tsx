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

export const PiCoatHanger = (props: IconProps) => {
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
        <Path d="M241.57 171.2 141.33 96l23.46-17.6A8 8 0 0 0 168 72a40 40 0 1 0-80 0 8 8 0 0 0 16 0 24 24 0 0 1 47.69-3.78l-28.35 21.27-.28.21-108.63 81.5A16 16 0 0 0 24 200h208a16 16 0 0 0 9.6-28.8ZM232 184H24l104-78z" />
      </G>
    </Svg>
  );
};