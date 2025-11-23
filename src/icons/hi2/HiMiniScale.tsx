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

export const HiMiniScale = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 10, 10)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="M10 2a.75.75 0 0 1 .75.75v.258a33 33 0 0 1 6.668.83.75.75 0 0 1-.336 1.461 31 31 0 0 0-1.103-.232l1.702 7.545a.75.75 0 0 1-.387.832A5 5 0 0 1 15 14a5 5 0 0 1-2.294-.556.75.75 0 0 1-.387-.832l1.77-7.849a32 32 0 0 0-3.339-.254v11.505a20 20 0 0 1 3.78.501.75.75 0 1 1-.339 1.462A18.6 18.6 0 0 0 10 17.5c-1.442 0-2.845.165-4.191.477a.75.75 0 0 1-.338-1.462 20 20 0 0 1 3.779-.501V4.509a32 32 0 0 0-3.34.254l1.771 7.85a.75.75 0 0 1-.387.83A5 5 0 0 1 5 14a5 5 0 0 1-2.294-.556.75.75 0 0 1-.387-.832L4.02 5.067q-.555.106-1.103.232a.75.75 0 0 1-.336-1.462 33 33 0 0 1 6.668-.829V2.75A.75.75 0 0 1 10 2M5 7.543 3.92 12.33a3.5 3.5 0 0 0 2.16 0zm10 0-1.08 4.787a3.5 3.5 0 0 0 2.16 0z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};