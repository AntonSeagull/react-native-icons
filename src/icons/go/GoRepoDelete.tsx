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

export const GoRepoDelete = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M5.75 0A2.75 2.75 0 0 0 3 2.75v16.5A2.75 2.75 0 0 0 5.75 22h8a.75.75 0 0 0 0-1.5h-8c-.69 0-1.25-.56-1.25-1.25V18A1.5 1.5 0 0 1 6 16.5h7.75a.75.75 0 0 0 0-1.5H6c-.546 0-1.059.146-1.5.401V2.75c0-.69.56-1.25 1.25-1.25H19.5v12.25a.75.75 0 0 0 1.5 0v-13a.75.75 0 0 0-.75-.75z" />
        <Path d="M16.22 16.22a.75.75 0 0 1 1.06 0L20 18.94l2.72-2.72a.75.75 0 1 1 1.06 1.06L21.06 20l2.72 2.72a.75.75 0 1 1-1.06 1.06L20 21.06l-2.72 2.72a.75.75 0 1 1-1.06-1.06L18.94 20l-2.72-2.72a.75.75 0 0 1 0-1.06" />
      </G>
    </Svg>
  );
};