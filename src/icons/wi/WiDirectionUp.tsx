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

export const WiDirectionUp = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 30 30"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 15, 15)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M9.95 10.87c-.01.35.1.65.34.9s.53.37.89.36c.34.02.63-.1.88-.37l1.66-1.64v10.3c-.01.35.11.64.36.88s.55.35.92.34c.34.02.64-.09.89-.32s.39-.53.4-.88v-10.3l1.64 1.64c.23.24.53.37.88.37q.54 0 .9-.36c.36-.36.36-.53.36-.89-.02-.36-.15-.64-.4-.85l-3.74-3.84c-.24-.23-.55-.37-.92-.4-.37.02-.68.16-.92.41l-3.75 3.81q-.39.33-.39.84" />
      </G>
    </Svg>
  );
};