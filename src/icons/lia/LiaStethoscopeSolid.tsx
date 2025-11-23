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

export const LiaStethoscopeSolid = (props: IconProps) => {
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
        <Path d="M7 4c-.79 0-1.457.46-1.781 1.125C3.953 5.477 3 6.629 3 8v9.375l.25.281s2.355 2.758 5.75 3.25V23c0 3.3 2.7 6 6 6s6-2.7 6-6v-5c0-1.117.883-2 2-2s2 .883 2 2v.188c-1.156.417-2 1.519-2 2.812 0 1.645 1.355 3 3 3s3-1.355 3-3c0-1.293-.844-2.395-2-2.812V18c0-2.2-1.8-4-4-4s-4 1.8-4 4v5c0 2.219-1.781 4-4 4s-4-1.781-4-4v-2.094c3.395-.492 5.75-3.25 5.75-3.25l.25-.281V8c0-1.371-.953-2.523-2.219-2.875A1.98 1.98 0 0 0 13 4a1.999 1.999 0 1 0 0 4c.656 0 1.23-.32 1.594-.812.25.18.406.472.406.812v8.563c-.36.363-2.488 2.437-5 2.437s-4.64-2.074-5-2.437V8c0-.34.156-.633.406-.812C5.77 7.68 6.344 8 7 8a1.999 1.999 0 1 0 0-4m19 16c.563 0 1 .438 1 1s-.437 1-1 1-1-.437-1-1 .438-1 1-1" />
      </G>
    </Svg>
  );
};