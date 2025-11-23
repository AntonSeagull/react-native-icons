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

export const RxDimensions = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M3 2.739a.25.25 0 0 1-.403.197L1.004 1.697a.25.25 0 0 1 0-.394L2.597.063A.25.25 0 0 1 3 .262v.74h6V.26a.25.25 0 0 1 .404-.197l1.592 1.239a.25.25 0 0 1 0 .394l-1.592 1.24A.25.25 0 0 1 9 2.738V2H3zM9.5 5h-7a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5m-7-1A1.5 1.5 0 0 0 1 5.5v7A1.5 1.5 0 0 0 2.5 14h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 9.5 4zm12.239 2H14v6h.739a.25.25 0 0 1 .197.403l-1.239 1.593a.25.25 0 0 1-.394 0l-1.24-1.593a.25.25 0 0 1 .198-.403H13V6h-.739a.25.25 0 0 1-.197-.403l1.239-1.593a.25.25 0 0 1 .394 0l1.24 1.593a.25.25 0 0 1-.198.403" clipRule="evenodd" />
      </G>
    </Svg>
  );
};