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

export const LiaCubeSolid = (props: IconProps) => {
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
        <Path d="m16 4.406-.406.188-10 4.5-.594.25V22.03l.5.282 10 5.562.5.281.5-.281 10-5.562.5-.282V9.344l-.594-.25-10-4.5Zm0 2.188 7.688 3.437L16 13.875l-7.687-3.844Zm-9 5.031 8 4v9.656l-8-4.437Zm18 0v9.219l-8 4.437v-9.656Z" />
      </G>
    </Svg>
  );
};