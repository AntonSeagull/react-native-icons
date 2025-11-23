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

export const FcCandleSticks = (props: IconProps) => {
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
        <Path d="M38 4h2v20h-2zM15 7h2v17h-2zM8 27h2v17H8zM28 19h2v22h-2z" />
        <Path fill="#4CAF50" d="M36 7h6c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2h-6c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2M13 10h6c1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2h-6c-1.1 0-2-.9-2-2v-7c0-1.1.9-2 2-2" />
        <Path fill="#F44336" d="M6 30h6c1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-7c0-1.1.9-2 2-2M26 22h6c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2h-6c-1.1 0-2-.9-2-2V24c0-1.1.9-2 2-2" />
      </G>
    </Svg>
  );
};