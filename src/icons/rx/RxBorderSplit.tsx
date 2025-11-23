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

export const RxBorderSplit = (props: IconProps) => {
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
        <Rect width={1} height={1} x={7} y={3.025} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={7} y={7.025} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={7} y={13.025} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={7} y={1.025} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={13} y={7.025} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={5} y={7.025} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={3} y={7.025} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={9} y={7.025} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={11} y={7.025} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={7} y={9.025} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={7} y={11.025} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={1} y={7.025} fill="currentColor" rx={0.5} />
        <Path fill="currentColor" fillRule="evenodd" d="M1 1.5a.5.5 0 0 1 .5-.5H6v1H2v4H1zM13 2H9V1h4.5a.5.5 0 0 1 .5.5V6h-1zM1 13.5V9h1v4h4v1H1.5a.5.5 0 0 1-.5-.5m12-.5V9h1v4.5a.5.5 0 0 1-.5.5h-4v-1z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};