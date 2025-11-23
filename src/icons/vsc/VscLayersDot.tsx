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

export const VscLayersDot = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="m8.185 1.083-.558.004-5.909 4.037.004.828L7.63 9.915l.55.004 6.092-3.963.003-.836zm-5.293 4.45 5.021-3.43 5.176 3.43-5.176 3.368zm4.739 6.882L1.793 8.5h1.795l4.325 2.9 4.459-2.9h1.833l-.8.52a4.002 4.002 0 0 0-4.21 2.739l-1.013.66zm1.373.776-1.09.71L3.587 11H1.793l5.838 3.915.55.004 1.02-.663a4 4 0 0 1-.197-1.065" clipRule="evenodd" />
        <Circle cx={13} cy={13} r={3} />
      </G>
    </Svg>
  );
};