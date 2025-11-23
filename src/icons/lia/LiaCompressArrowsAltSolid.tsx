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

export const LiaCompressArrowsAltSolid = (props: IconProps) => {
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
        <Path d="M4.719 3.281 3.28 4.72 10.562 12H5v2h9V5h-2v5.563Zm22.562 0L20 10.562V5h-2v9h9v-2h-5.562l7.28-7.281ZM5 18v2h5.563L3.28 27.281 4.72 28.72 12 21.437V27h2v-9Zm13 0v9h2v-5.562l7.281 7.28 1.438-1.437L21.437 20H27v-2Z" />
      </G>
    </Svg>
  );
};