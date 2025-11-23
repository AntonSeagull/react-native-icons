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

export const PiTidalLogoDuotone = (props: IconProps) => {
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
        <Path d="m48 56 40 40-40 40L8 96Zm40 40 40 40 40-40-40-40Zm40 120 40-40-40-40-40 40Zm80-160-40 40 40 40 40-40Z" opacity={0.2} />
        <Path d="m253.66 90.34-40-40a8 8 0 0 0-11.32 0L168 84.69l-34.34-34.35a8 8 0 0 0-11.32 0L88 84.69 53.66 50.34a8 8 0 0 0-11.32 0l-40 40a8 8 0 0 0 0 11.32l40 40a8 8 0 0 0 11.32 0L88 107.31 116.69 136l-34.35 34.34a8 8 0 0 0 0 11.32l40 40a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0 0-11.32L139.31 136 168 107.31l34.34 34.35a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0 0-11.32M48 124.69 19.31 96 48 67.31 76.69 96Zm80 80L99.31 176 128 147.31 156.69 176Zm0-80L99.31 96 128 67.31 156.69 96Zm80 0L179.31 96 208 67.31 236.69 96Z" />
      </G>
    </Svg>
  );
};