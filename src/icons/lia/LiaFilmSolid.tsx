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

export const LiaFilmSolid = (props: IconProps) => {
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
        <Path d="M4 4v24h24V4Zm2 2h2v1h2V6h12v1h2V6h2v20h-2v-1h-2v1H10v-1H8v1H6Zm2 3v2h2V9Zm14 0v2h2V9ZM8 13v2h2v-2Zm14 0v2h2v-2ZM8 17v2h2v-2Zm14 0v2h2v-2ZM8 21v2h2v-2Zm14 0v2h2v-2Z" />
      </G>
    </Svg>
  );
};