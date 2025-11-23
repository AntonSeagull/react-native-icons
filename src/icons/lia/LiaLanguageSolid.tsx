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

export const LiaLanguageSolid = (props: IconProps) => {
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
        <Path d="M4 4v18h6v6h18V10h-6V4Zm2 2h14v4.563L10.563 20H6Zm5 2v1H8v2h4.938c-.13 1.148-.481 2.055-1.063 2.688a4.5 4.5 0 0 1-.906-.407C10.266 12.863 10 12.418 10 12H8c0 1.191.734 2.184 1.719 2.844A8.3 8.3 0 0 1 8 15v2c1.773 0 3.25-.406 4.375-1.156.523.09 1.055.156 1.625.156v-1.875c.543-.91.832-1.973.938-3.125H16V9h-3V8Zm10.438 4H26v14H12v-4.562ZM20 13.844l-.937 2.844-2 6-.063.156V24h2v-.875l.031-.125h1.938l.031.125V24h2v-1.156l-.062-.157-2-6Zm0 6.281.281.875h-.562Z" />
      </G>
    </Svg>
  );
};