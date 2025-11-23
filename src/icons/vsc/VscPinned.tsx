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

export const VscPinned = (props: IconProps) => {
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
        <Path d="M4 2h7v.278q0 .609-.258 1.117-.259.508-.742.875v2.86q.46.218.828.546t.633.735.398.882q.133.477.141.985v.5H8V14l-.5 1-.5-1v-3.222H3v-.5q0-.508.14-.977t.4-.883A3.4 3.4 0 0 1 5 7.13V4.27a2.6 2.6 0 0 1-.734-.875A2.5 2.5 0 0 1 4 2.278zm1.086.778q.063.188.156.32a1.5 1.5 0 0 0 .461.43L6 3.715v4.102l-.336.117q-.617.219-1.047.711C4.331 8.973 4.09 9.573 4 10h7c-.088-.427-.33-1.027-.617-1.355a2.46 2.46 0 0 0-1.047-.71L9 7.816V3.715l.297-.18q.14-.086.25-.195a2 2 0 0 0 .21-.242 1 1 0 0 0 .157-.32z" />
      </G>
    </Svg>
  );
};