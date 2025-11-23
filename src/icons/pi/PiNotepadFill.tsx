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

export const PiNotepadFill = (props: IconProps) => {
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
        <Path d="M208 32h-24v-8a8 8 0 0 0-16 0v8h-32v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a8 8 0 0 0-8 8v160a32 32 0 0 0 32 32h112a32 32 0 0 0 32-32V40a8 8 0 0 0-8-8m-88 24a8 8 0 0 1 16 0v8a8 8 0 0 1-16 0ZM80 72a8 8 0 0 1-8-8v-8a8 8 0 0 1 16 0v8a8 8 0 0 1-8 8m80 96H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16m0-32H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16m24-72a8 8 0 0 1-16 0v-8a8 8 0 0 1 16 0Z" />
      </G>
    </Svg>
  );
};