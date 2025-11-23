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

export const SiUv = (props: IconProps) => {
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
        <Path d="m0 .106.05 11.95.04 9.56a2.39 2.39 0 0 0 2.4 2.379l9.56-.04 5.975-.026.608-.002c1.316-.006 2.38-1.097 2.38-2.413h1.094v2.39H24L23.9.005 12.905.051l.046 9.525v5.963h-1.958l.046-5.955-.046-9.525Z" />
      </G>
    </Svg>
  );
};