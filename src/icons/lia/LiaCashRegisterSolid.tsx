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

export const LiaCashRegisterSolid = (props: IconProps) => {
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
        <Path d="M22 3v4c-1.848 0-3.613.332-5.266.91l-.527-1.148.902-.403-.812-1.828-3.652 1.625.812 1.828.922-.41.512 1.106a16 16 0 0 0-3.043 1.988l-.786-.836.727-.668-1.351-1.476-2.946 2.707 1.352 1.476.742-.684.805.848a16 16 0 0 0-2.446 3.395l-1.082-.535.45-.883-1.782-.907-1.812 3.567 1.781.906.457-.902 1.145.57A15.9 15.9 0 0 0 6.05 22H4v6h24V3Zm2 2h2v17H8.05C8.563 14.727 14.595 9 22 9h2Zm-6 6.953a2.001 2.001 0 0 0-1 3.735V20h5v-2h-3v-2.316a1.998 1.998 0 0 0-1-3.73M6 24h20v2H6Z" />
      </G>
    </Svg>
  );
};