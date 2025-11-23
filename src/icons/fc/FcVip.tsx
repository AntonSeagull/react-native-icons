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

export const FcVip = (props: IconProps) => {
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
        <Path fill="#880E4F" d="M38 43H10c-2.2 0-4-1.8-4-4V11c0-2.2 1.8-4 4-4h28c2.2 0 4 1.8 4 4v28c0 2.2-1.8 4-4 4" />
        <Path d="m15.9 28 2.1-9.1h2.8l-3.6 12.6h-2.6L11 18.9h2.8zM25.6 31.5h-2.5V18.9h2.5zM31.2 27.1v4.4h-2.5V18.9H33c3.7 0 4.1 3.4 4.1 4.2 0 1.2-.5 4-4.1 4zm0-2.2h1.7c1.3 0 1.5-1.1 1.5-1.9 0-1.6-.9-2.1-1.5-2.1h-1.7z" />
      </G>
    </Svg>
  );
};