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

export const LiaCatSolid = (props: IconProps) => {
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
        <Path d="M10 4c0 1.117-.883 2-2 2H7c-2.2 0-4 1.8-4 4s1.8 4 4 4h1.156A7.3 7.3 0 0 0 8 15.5V28h2V15.5c0-3.031 2.469-5.5 5.5-5.5.902 0 1.75.207 2.5.594V8.438A7.5 7.5 0 0 0 15.5 8c-2.867 0-5.363 1.629-6.625 4H7c-1.117 0-2-.883-2-2s.883-2 2-2h1c2.2 0 4-1.8 4-4Zm9 2.094V12.5c0 2.55 2.316 4.5 5 4.5s5-1.95 5-4.5V6.094l-1.562 1.093-1.657 1.157c-.57-.203-1.133-.438-1.781-.438s-1.21.235-1.781.438l-1.657-1.156Zm5 3.812c.578 0 1.11.14 1.563.375l.53.281.5-.343.407-.281V12.5c0 1.316-1.266 2.5-3 2.5s-3-1.184-3-2.5V9.938l.406.28.5.345.532-.282A3.4 3.4 0 0 1 24 9.906M17 15c-2.758 0-5 2.242-5 5v8h2v-8c0-1.652 1.348-3 3-3s3 1.348 3 3v8h2v-8c0-.965-.273-1.86-.75-2.625a5.9 5.9 0 0 1-2.344-2A5 5 0 0 0 17 15m9 2.688A6.5 6.5 0 0 1 24 18v10h2Z" />
      </G>
    </Svg>
  );
};