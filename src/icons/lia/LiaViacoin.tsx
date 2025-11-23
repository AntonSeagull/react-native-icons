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

export const LiaViacoin = (props: IconProps) => {
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
        <Path d="m6.281 6 2.563 6H5v2h4.688l.843 2H5v2h6.406l4.469 10.531L20.469 18H27v-2h-5.656l.875-2H27v-2h-3.906l2.625-6H23.53l-4.375 10H12.72L8.438 6Zm7.282 12h4.718l-2.375 5.469Z" />
      </G>
    </Svg>
  );
};