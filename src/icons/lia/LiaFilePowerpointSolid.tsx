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

export const LiaFilePowerpointSolid = (props: IconProps) => {
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
        <Path d="M6 3v26h20V9.6l-.3-.3-6-6-.3-.3zm2 2h10v6h6v16H8zm12 1.4L22.6 9H20zM13 13v2h4c1.2 0 2 .8 2 2s-.8 2-2 2-2-.8-2-2h-2v7h2v-3.6c.6.4 1.3.6 2 .6 2.2 0 4-1.8 4-4s-1.8-4-4-4z" />
      </G>
    </Svg>
  );
};