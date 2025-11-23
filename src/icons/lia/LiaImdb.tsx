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

export const LiaImdb = (props: IconProps) => {
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
        <Path d="M0 7v18h32V7Zm2 2h28v14H2Zm3 2.688v8.625h2v-8.625Zm3.094 0v8.625H10V15.5l.906 4.813h1.281L13 15.5v4.813h1.813v-8.625H12l-.5 4.124-.687-4.124Zm7.812 0v8.5h2.406c1.301 0 1.79-.2 2.188-.5.398-.2.594-.688.594-1.188v-5.187c0-.602-.196-1.114-.594-1.313-.5-.2-.687-.312-2.187-.312Zm6.188.124v8.5h1.812s.086-.601.188-.5c.199 0 1.008.375 1.406.375.5 0 .7.008 1-.093.398-.2.5-.48.5-.782v-5c0-.699-.71-1.218-1.312-1.218s-1.176.394-1.375.594v-1.876ZM18 13c.398 0 .813.008.813.406v5c0 .399-.512.407-.813.407Zm6.594 1c.101 0 .218.105.218.406v4.281c0 .2-.019.407-.218.407-.102 0-.188-.106-.188-.407v-4.28c0-.2-.011-.407.188-.407" />
      </G>
    </Svg>
  );
};