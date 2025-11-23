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

export const LiaArchwaySolid = (props: IconProps) => {
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
        <Path d="M3 6v6h2v12H3v2h10v-7c0-1.654 1.346-3 3-3s3 1.346 3 3v7h10v-2h-2V12h2V6zm2 2h22v2H5zm2 4h18v12h-4v-5c0-2.757-2.243-5-5-5s-5 2.243-5 5v5H7z" />
      </G>
    </Svg>
  );
};