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

export const VscCompassDot = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="M9.101 13.9a6 6 0 0 1-.601.08V13h-1v.98a6 6 0 0 1-5.482-5.518H3v-1h-.976A6 6 0 0 1 7.5 2.02V3h1v-.98a6 6 0 0 1 5.48 5.48H13v1h.98a6 6 0 0 1-.08.601q.502.117.95.351Q14.997 8.75 15 8a7 7 0 1 0-5.548 6.85 4 4 0 0 1-.35-.95m.803-3.433L6.99 9.01 4.967 4.967 9.009 6.99l1.459 2.913a4 4 0 0 0-.564.563m-.469-1.032L8.481 7.52l-1.916-.955.954 1.917z" clipRule="evenodd" />
        <Circle cx={13} cy={13} r={3} />
      </G>
    </Svg>
  );
};