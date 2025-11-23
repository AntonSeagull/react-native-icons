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

export const RxBorderAll = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M.25 1A.75.75 0 0 1 1 .25h13a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75H1A.75.75 0 0 1 .25 14zm1.5.75v11.5h11.5V1.75z" clipRule="evenodd" />
        <Rect width={1} height={1} x={7} y={5} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={7} y={3} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={7} y={7} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={5} y={7} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={3} y={7} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={9} y={7} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={11} y={7} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={7} y={9} fill="currentColor" rx={0.5} />
        <Rect width={1} height={1} x={7} y={11} fill="currentColor" rx={0.5} />
      </G>
    </Svg>
  );
};