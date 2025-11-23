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

export const RxBorderNone = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 15 15"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 7.5, 7.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Rect width={1} height={1} x={7} y={5.025} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={13} y={5.025} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={7} y={3.025} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={13} y={3.025} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={7} y={7.025} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={7} y={13.025} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={7} y={1.025} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={13} y={7.025} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={13} y={13.025} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={13} y={1.025} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={5} y={7.025} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={5} y={13.025} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={5} y={1.025} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={3} y={7.025} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={3} y={13.025} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={3} y={1.025} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={9} y={7.025} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={9} y={13.025} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={9} y={1.025} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={11} y={7.025} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={11} y={13.025} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={11} y={1.025} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={7} y={9.025} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={13} y={9.025} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={7} y={11.025} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={13} y={11.025} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={1} y={5.025} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={1} y={3.025} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={1} y={7.025} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={1} y={13.025} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={1} y={1.025} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={1} y={9.025} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={1} y={11.025} fill="currentColor" rx={0.5} />
      </G>
    </Svg>
  );
};