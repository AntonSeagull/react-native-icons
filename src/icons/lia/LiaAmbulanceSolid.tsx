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

export const LiaAmbulanceSolid = (props: IconProps) => {
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
        <Path d="M18 3c-1.105 0-2 .895-2 2v1H1v19h3.156c.446 1.719 1.992 3 3.844 3s3.398-1.281 3.844-3h8.312c.446 1.719 1.992 3 3.844 3s3.398-1.281 3.844-3H31V13.625l-.25-.281-6-7L24.469 6H20V5c0-1.105-.895-2-2-2M3 8h20.531L29 14.375V23h-1.156c-.446-1.719-1.992-3-3.844-3s-3.398 1.281-3.844 3h-8.312c-.446-1.719-1.992-3-3.844-3s-3.398 1.281-3.844 3H3Zm11 3v3h-3v2h3v3h2v-3h3v-2h-3v-3ZM8 22c1.117 0 2 .883 2 2s-.883 2-2 2-2-.883-2-2 .883-2 2-2m16 0c1.117 0 2 .883 2 2s-.883 2-2 2-2-.883-2-2 .883-2 2-2" />
      </G>
    </Svg>
  );
};