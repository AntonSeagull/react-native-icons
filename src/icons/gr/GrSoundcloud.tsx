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

export const GrSoundcloud = (props: IconProps) => {
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
        <Path fill="url(#a)" d="M0 15.922q0 .447.324.676a.89.89 0 0 0 .692.162q.347-.067.486-.246.14-.178.14-.592v-3.238a.8.8 0 0 0-.24-.587.8.8 0 0 0-.587-.24.79.79 0 0 0-.575.24.8.8 0 0 0-.24.587zm2.569 1.385q0 .324.229.486.228.162.586.162.369 0 .597-.162.23-.162.23-.486v-7.55a.79.79 0 0 0-.24-.575.8.8 0 0 0-.587-.24.79.79 0 0 0-.575.24.79.79 0 0 0-.24.576v7.55Zm2.557.358q0 .323.235.485t.603.162q.357 0 .586-.162.23-.162.229-.485v-6.891q0-.346-.24-.592a.78.78 0 0 0-.575-.246.8.8 0 0 0-.592.246.8.8 0 0 0-.246.592zm2.569.033q0 .614.826.614.827 0 .827-.614V6.53q0-.938-.57-1.06-.369-.09-.726.211t-.357.849zm2.613.324V5.872q0-.582.346-.693a6.54 6.54 0 0 1 4.668.625A6.56 6.56 0 0 1 17.707 8a6.54 6.54 0 0 1 1.055 3.065q.681-.29 1.452-.29 1.563 0 2.675 1.106 1.11 1.106 1.111 2.657 0 1.564-1.111 2.67t-2.664 1.105l-9.716-.01a.26.26 0 0 1-.15-.124.33.33 0 0 1-.05-.156Z" />
        <Defs>
        <LinearGradient id="a" x1={30064.2} x2={30064.2} y1={507.299} y2={18096.6} gradientUnits="userSpaceOnUse">
        <Stop stopColor="#F80" />
        <Stop offset={1} stopColor="#F30" />
        </LinearGradient>
        </Defs>
      </G>
    </Svg>
  );
};