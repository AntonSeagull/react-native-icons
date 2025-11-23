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

export const PiPaperPlaneDuotone = (props: IconProps) => {
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
        <Path d="M221.28 215.51 128 184l-93.28 31.51a8 8 0 0 1-9.67-11.44l95.85-168a8 8 0 0 1 14 0l96.09 168a8 8 0 0 1-9.71 11.44" opacity={0.2} />
        <Path d="M237.9 200.1 141.85 32.18a16 16 0 0 0-27.89 0l-95.89 168a16 16 0 0 0 19.26 22.92L128 192.45l90.67 30.63a16.2 16.2 0 0 0 5.33.92 16 16 0 0 0 13.86-23.9Zm-14.05 7.84L136 178.26V120a8 8 0 0 0-16 0v58.26l-87.84 29.68-.16.06 95.86-168L224 208Z" />
      </G>
    </Svg>
  );
};