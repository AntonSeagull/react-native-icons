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

export const LiaTruckMovingSolid = (props: IconProps) => {
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
        <Path d="M1 4v21h3.156c.446 1.719 1.992 3 3.844 3s3.398-1.281 3.844-3h8.312c.446 1.719 1.992 3 3.844 3s3.398-1.281 3.844-3H31V14.594l-.281-.313-6-6L24.406 8H19V4Zm2 2h14v17h-5.156c-.446-1.719-1.992-3-3.844-3s-3.398 1.281-3.844 3H3Zm16 4h4.563L29 15.438V23h-1.156c-.446-1.719-1.992-3-3.844-3s-3.398 1.281-3.844 3H19ZM8 22c1.117 0 2 .883 2 2s-.883 2-2 2-2-.883-2-2 .883-2 2-2m16 0c1.117 0 2 .883 2 2s-.883 2-2 2-2-.883-2-2 .883-2 2-2" />
      </G>
    </Svg>
  );
};