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

export const FcNumericalSorting12 = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#546E7A" d="M38 33V5h-4v28h-6l8 10 8-10z" />
        <Path d="M16.4 20h-3V8.6L9.9 9.7V7.3L16 5.1h.3V20zM19.4 43H9.2v-2l4.8-5.1c.4-.4.7-.8.9-1.1s.5-.6.6-.9c.2-.3.3-.5.3-.8.1-.2.1-.5.1-.7 0-.7-.2-1.2-.5-1.6s-.8-.6-1.4-.6c-.3 0-.7.1-.9.2-.3.1-.5.3-.7.5s-.3.5-.4.8-.1.6-.1 1h-3c0-.7.1-1.3.4-1.9.2-.6.6-1.1 1-1.6.5-.4 1-.8 1.6-1.1s1.4-.4 2.2-.4q1.2 0 2.1.3c.6.2 1.1.5 1.5.8s.7.8.9 1.3.3 1.1.3 1.8c0 .5-.1 1-.2 1.4s-.4 1.2-.7 1.7-.6.9-1 1.4-.9 1-1.4 1.5L13 40.6h6.4z" />
      </G>
    </Svg>
  );
};