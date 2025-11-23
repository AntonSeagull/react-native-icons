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

export const PiShoppingCartLight = (props: IconProps) => {
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
        <Path d="M228.61 60.16A6 6 0 0 0 224 58H61l-6.37-35.07a6 6 0 0 0-5.9-4.93H24a6 6 0 0 0 0 12h19.72l25.81 141.94a21.93 21.93 0 0 0 6.24 11.77 26 26 0 1 0 38.12 6.29h52.22A26 26 0 1 0 188 178H91.17a10 10 0 0 1-9.84-8.21L77.73 150H196.1a22 22 0 0 0 21.65-18.06l12.15-66.87a6 6 0 0 0-1.29-4.91M106 204a14 14 0 1 1-14-14 14 14 0 0 1 14 14m96 0a14 14 0 1 1-14-14 14 14 0 0 1 14 14m3.94-74.21a10 10 0 0 1-9.84 8.21H75.55L63.19 70h153.62Z" />
      </G>
    </Svg>
  );
};