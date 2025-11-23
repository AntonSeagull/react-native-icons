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

export const PiSecurityCameraBold = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M244 132a12 12 0 0 0-12 12v12h-35l-14.35-14.34 47.52-47.52a20 20 0 0 0 0-28.28l-56-56a20 20 0 0 0-28.32 0L6.42 150.47A22 22 0 0 0 22 188h33.7l26.14 26.14a20 20 0 0 0 28.29 0l55.51-55.51 15.52 15.51a19.86 19.86 0 0 0 14.15 5.86H232v12a12 12 0 0 0 24 0v-48a12 12 0 0 0-12-12M160 29.67l15 15L55.71 164h-28.9ZM96 194.34 77.65 176 192 61.66 210.34 80l-53.17 53.17Z" />
      </G>
    </Svg>
  );
};