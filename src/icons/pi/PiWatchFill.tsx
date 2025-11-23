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

export const PiWatchFill = (props: IconProps) => {
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
        <Path d="m175.3 63.53-6.24-34.38A16 16 0 0 0 153.32 16h-50.64a16 16 0 0 0-15.74 13.15L80.7 63.53a79.9 79.9 0 0 0 0 128.94l6.24 34.38A16 16 0 0 0 102.68 240h50.64a16 16 0 0 0 15.74-13.15l6.24-34.38a79.9 79.9 0 0 0 0-128.94M102.68 32h50.64l3.91 21.55a79.75 79.75 0 0 0-58.46 0Zm50.64 192h-50.64l-3.91-21.55a79.75 79.75 0 0 0 58.46 0ZM168 136h-40a8 8 0 0 1-8-8V88a8 8 0 0 1 16 0v32h32a8 8 0 0 1 0 16" />
      </G>
    </Svg>
  );
};