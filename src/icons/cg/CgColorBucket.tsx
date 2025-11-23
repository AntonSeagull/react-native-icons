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

export const CgColorBucket = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M8.203 2.004c1.261 0 2.304 1.103 2.476 2.538l8.483 8.484-7.778 7.778a3 3 0 0 1-4.243 0L2.9 16.562a3 3 0 0 1 0-4.243l2.804-2.805V4.961c0-1.633 1.12-2.957 2.5-2.957m.5 2.957v1.553l-1 1V4.961c0-.327.224-.591.5-.591.277 0 .5.264.5.591m0 5.914V9.342l-4.39 4.391a1 1 0 0 0 0 1.414l4.243 4.243a1 1 0 0 0 1.414 0l6.364-6.364-5.63-5.63v3.48l-.003.128h-2.01a1 1 0 0 0 .012-.129" clipRule="evenodd" />
        <Path fill="currentColor" d="M16.859 16.875a3 3 0 1 0 4.242 0l-2.121-2.121z" />
      </G>
    </Svg>
  );
};