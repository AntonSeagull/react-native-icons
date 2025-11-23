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

export const PiBridge = (props: IconProps) => {
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
        <Path d="M232 160h-32v-58.66a71.9 71.9 0 0 0 29 21.42 8 8 0 0 0 6-14.83A55.78 55.78 0 0 1 200 56a8 8 0 0 0-16 0 56 56 0 0 1-112 0 8 8 0 0 0-16 0 55.78 55.78 0 0 1-35 51.93 8 8 0 0 0 6 14.83 71.9 71.9 0 0 0 29-21.42V160H24a8 8 0 0 0 0 16h32v24a8 8 0 0 0 16 0v-24h112v24a8 8 0 0 0 16 0v-24h32a8 8 0 0 0 0-16m-88-33.8V160h-32v-33.8a72 72 0 0 0 32 0m-72-25a72.5 72.5 0 0 0 24 19.27V160H72Zm88 58.8v-39.52a72.5 72.5 0 0 0 24-19.27V160Z" />
      </G>
    </Svg>
  );
};