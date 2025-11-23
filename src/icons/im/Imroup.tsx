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

export const Imroup = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M6 7.25c0 .412-.338.75-.75.75h-1.5A.75.75 0 0 1 3 7.25v-1.5c0-.412.337-.75.75-.75h1.5c.412 0 .75.338.75.75zM11 7.25c0 .412-.338.75-.75.75h-1.5A.753.753 0 0 1 8 7.25v-1.5c0-.412.338-.75.75-.75h1.5c.412 0 .75.338.75.75zM6 12.25c0 .412-.338.75-.75.75h-1.5a.75.75 0 0 1-.75-.75v-1.5c0-.412.337-.75.75-.75h1.5c.412 0 .75.338.75.75zM11 12.25c0 .412-.338.75-.75.75h-1.5a.753.753 0 0 1-.75-.75v-1.5c0-.412.338-.75.75-.75h1.5c.412 0 .75.338.75.75zM14.251 2.5 16 .751V0h-.751L13.5 1.749 11.751 0H11v.751L12.749 2.5 11 4.249V5h.751L13.5 3.251 15.249 5H16v-.751zM0 12h1v2H0zM0 9h1v2H0zM13 7h1v2h-1zM13 13h1v2h-1zM13 10h1v2h-1zM0 6h1v2H0zM0 3h1v2H0zM8 2h2v1H8zM5 2h2v1H5zM2 2h2v1H2zM7 15h2v1H7zM10 15h2v1h-2zM4 15h2v1H4zM1 15h2v1H1z" />
      </G>
    </Svg>
  );
};