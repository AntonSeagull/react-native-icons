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

export const PiPencilSimpleSlashBold = (props: IconProps) => {
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
        <Path d="M56.88 31.93a12 12 0 1 0-17.76 16.14l45.64 50.2-50.9 50.9A19.86 19.86 0 0 0 28 163.31V208a20 20 0 0 0 20 20h44.69a19.85 19.85 0 0 0 14.14-5.86l47.43-47.42 44.87 49.35a12 12 0 1 0 17.76-16.14ZM91 204H52v-39l48.92-48.92 37.18 40.89ZM230.15 70.54l-44.69-44.68a20 20 0 0 0-28.28 0l-36 36a12 12 0 0 0 14.55 18.82L175 120l-.54.53a12 12 0 1 0 17 17l38.67-38.67a20 20 0 0 0 .02-28.32M192 103l-39-39 18.34-18.34 39 39Z" />
      </G>
    </Svg>
  );
};