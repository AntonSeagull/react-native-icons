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

export const LiaCameraRetroSolid = (props: IconProps) => {
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
        <Path d="m11.5 6-.312.406L10 8H9V7H5v1H3v18h26V8h-7l-1.187-1.594L20.5 6Zm1 2h7l1.188 1.594L21 10h6v4h-5.812c-1.043-1.785-2.981-3-5.188-3s-4.145 1.215-5.187 3H5v-4h6l.313-.406ZM23 11v2h2v-2Zm-7 2c2.223 0 4 1.777 4 4s-1.777 4-4 4-4-1.777-4-4 1.777-4 4-4M5 16h5.094c-.055.32-.094.664-.094 1 0 3.3 2.7 6 6 6s6-2.7 6-6c0-.336-.04-.68-.094-1H27v8H5Z" />
      </G>
    </Svg>
  );
};