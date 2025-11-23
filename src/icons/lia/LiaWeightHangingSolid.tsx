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

export const LiaWeightHangingSolid = (props: IconProps) => {
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
        <Path d="M16 5c-1.645 0-3 1.355-3 3 0 .352.074.684.188 1h-5l-.157.813-3 15-.031.093V27h22v-2.094l-.031-.093-3-15L23.812 9h-5A3 3 0 0 0 19 8c0-1.645-1.355-3-3-3m0 2c.563 0 1 .438 1 1s-.437 1-1 1-1-.437-1-1 .438-1 1-1m-6.187 4h12.375L25 25H7Z" />
      </G>
    </Svg>
  );
};