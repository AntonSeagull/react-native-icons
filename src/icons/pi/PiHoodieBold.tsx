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

export const PiHoodieBold = (props: IconProps) => {
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
        <Path d="m244.64 118.31-54.27-81.4A20 20 0 0 0 173.73 28H82.27a20 20 0 0 0-16.64 8.91l-54.27 81.4a20 20 0 0 0-2.65 16.36l21.43 78.59A20 20 0 0 0 49.43 228H76a20 20 0 0 0 20-20v-12h64v12a20 20 0 0 0 20 20h26.57a20 20 0 0 0 19.29-14.74l21.43-78.59a20 20 0 0 0-2.65-16.36M84 172V70.64l12 7.5V136a12 12 0 0 0 24 0V93.15l1.64 1a12 12 0 0 0 12.72 0l1.64-1V128a12 12 0 0 0 24 0V78.14l12-7.5V172Zm44-102.15L99.46 52h57.08ZM52.49 204l-20.15-73.89L60 88.62V176a20 20 0 0 0 12 18.32V204Zm151 0H184v-9.68A20 20 0 0 0 196 176V88.62l27.66 41.49Z" />
      </G>
    </Svg>
  );
};