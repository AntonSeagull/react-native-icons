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

export const FcRatings = (props: IconProps) => {
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
        <Path fill="#42A5F5" d="M36 44H8V8h20l8 8z" />
        <Path fill="#90CAF9" d="M40 40H12V4h20l8 8z" />
        <Path fill="#E1F5FE" d="M38.5 13H31V5.5z" />
        <Path fill="#1976D2" d="M34 20h-7l2.4 2.4-2.4 2.5-4-4-6.1 6 2.2 2.2 3.9-4 4 4 4.6-4.5L34 27z" />
      </G>
    </Svg>
  );
};