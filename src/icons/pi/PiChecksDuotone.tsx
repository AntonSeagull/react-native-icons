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

export const PiChecksDuotone = (props: IconProps) => {
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
        <Path d="M240 64v128a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16" opacity={0.2} />
        <Path d="m149.61 85.71-89.6 88a8 8 0 0 1-11.22 0L10.39 136a8 8 0 1 1 11.22-11.41l32.79 32.2 84-82.5a8 8 0 1 1 11.22 11.42Zm96.1-11.32a8 8 0 0 0-11.32-.1l-84 82.5-18.83-18.5a8 8 0 0 0-11.21 11.42l24.43 24a8 8 0 0 0 11.22 0l89.6-88a8 8 0 0 0 .11-11.32" />
      </G>
    </Svg>
  );
};