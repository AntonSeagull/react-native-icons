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

export const PiPentagonLight = (props: IconProps) => {
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
        <Path d="m224.35 89.15-87.94-68.33-.13-.1a14 14 0 0 0-16.56 0l-.13.1-87.94 68.33a14 14 0 0 0-5 15.45l32 107.56v.13A14 14 0 0 0 72 222h112a14 14 0 0 0 13.33-9.71s0-.08 0-.13l32-107.56a14 14 0 0 0-4.98-15.45M217.9 101v.12l-32 107.54A2 2 0 0 1 184 210H72a2 2 0 0 1-1.89-1.34l-32-107.54V101a2 2 0 0 1 .72-2.23l.13-.1 87.91-68.3a2 2 0 0 1 2.28 0l87.91 68.3.13.1a2 2 0 0 1 .71 2.23" />
      </G>
    </Svg>
  );
};