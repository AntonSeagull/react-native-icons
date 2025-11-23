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

export const FcQuestions = (props: IconProps) => {
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
        <Path fill="#1976D2" d="M24.5 28.3c0-4.7 3.6-4.4 3.6-7.2 0-.7-.2-2.1-2-2.1-2 0-2.1 1.6-2.1 2h-2.7c0-.7.3-4.2 4.8-4.2 4.6 0 4.7 3.6 4.7 4.3 0 3.5-3.8 4-3.8 7.3h-2.5zm-.2 3.5c0-.2 0-1.5 1.5-1.5 1.4 0 1.5 1.3 1.5 1.5 0 .4-.2 1.4-1.5 1.4s-1.5-1-1.5-1.4" />
      </G>
    </Svg>
  );
};