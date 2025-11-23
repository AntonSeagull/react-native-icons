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

export const LiaGasPumpSolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M8 5C6.355 5 5 6.355 5 8v19h14v-7h2v4c0 1.645 1.355 3 3 3s3-1.355 3-3V13.813c0-.797-.312-1.532-.875-2.094L21.406 7 20 8.406l2.844 2.844C21.77 11.707 21 12.766 21 14c0 1.645 1.355 3 3 3a3 3 0 0 0 1-.187V24c0 .566-.434 1-1 1s-1-.434-1-1v-4c0-1.094-.906-2-2-2h-2V8c0-1.645-1.355-3-3-3Zm0 2h8c.566 0 1 .434 1 1v4H7V8c0-.566.434-1 1-1m16 6c.563 0 1 .438 1 1s-.437 1-1 1-1-.437-1-1 .438-1 1-1M7 14h10v11H7Z" />
      </G>
    </Svg>
  );
};