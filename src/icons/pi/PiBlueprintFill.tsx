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

export const PiBlueprintFill = (props: IconProps) => {
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
        <Path d="M136 120h24v16h-24Zm104-56v136a8 8 0 0 1-8 8H48a32 32 0 0 1-32-32V64a32 32 0 0 1 32-32h16a8 8 0 0 1 8 8v16h160a8 8 0 0 1 8 8M56 48h-8a16 16 0 0 0-16 16v84.29A31.8 31.8 0 0 1 48 144h8Zm120 88v-16h16a8 8 0 0 0 0-16h-16v-8a8 8 0 0 0-16 0v8h-24v-8a8 8 0 0 0-16 0v8h-16a8 8 0 0 0 0 16h16v16h-16a8 8 0 0 0 0 16h16v8a8 8 0 0 0 16 0v-8h24v8a8 8 0 0 0 16 0v-8h16a8 8 0 0 0 0-16Z" />
      </G>
    </Svg>
  );
};