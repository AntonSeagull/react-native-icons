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

export const IoFlashlightSharp = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m330 16-42.68 42.7L453.3 224.68 496 182z" />
        <Ellipse cx={224.68} cy={287.3} rx={20.03} ry={19.96} style={{
        fill: "none"
        }} />
        <Path d="M429.21 243.85 268 82.59 249.65 168 16 402l94 94 234.23-233.8Zm-189 56.07a20 20 0 1 1 0-25.25 20 20 0 0 1-.02 25.25Z" />
      </G>
    </Svg>
  );
};