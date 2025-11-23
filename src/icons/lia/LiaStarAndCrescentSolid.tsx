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

export const LiaStarAndCrescentSolid = (props: IconProps) => {
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
        <Path d="M14.5 4C8.145 4 3.031 9.41 3.031 16S8.145 28 14.5 28c3.867 0 6.477-1.555 8.438-3.406l-.688-.719-.5-.875c-1.156.684-2.215 1-4.75 1-4.426 0-8-3.34-8-8s3.578-8 8-8c2.148 0 3.645.34 4.719.938l.218-.407L22 8.47l-.25.469c.02.011.035.015.063.03l.5-.843.718-.719C21.031 5.52 18.176 4 14.5 4m0 2c.46 0 .887.043 1.313.094C10.906 6.668 7 10.719 7 16c0 5.293 3.926 9.344 8.844 9.906A12 12 0 0 1 14.5 26c-5.223 0-9.469-4.441-9.469-10 0-5.562 4.246-10 9.469-10m11.094 5-2.157 3.094-3.406-1.219L22.125 16 20 19.063l3.438-1.157L25.563 21v-3.812L29 16l-3.437-1.187Z" />
      </G>
    </Svg>
  );
};