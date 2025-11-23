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

export const PiCalendarSlash = (props: IconProps) => {
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
        <Path d="M53.92 34.62A8 8 0 0 0 48 32a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a8 8 0 0 0 5.92-13.38ZM73.55 80H48V51.88ZM48 208V96h40.1l101.82 112ZM224 48v129.23a8 8 0 1 1-16 0V96h-73.12a8 8 0 0 1 0-16H208V48h-24v8a8 8 0 0 1-16 0v-8H91.25a8 8 0 0 1 0-16H168v-8a8 8 0 0 1 16 0v8h24a16 16 0 0 1 16 16" />
      </G>
    </Svg>
  );
};