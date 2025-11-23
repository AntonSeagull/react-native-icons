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

export const TbTransitionTopFilled = (props: IconProps) => {
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
        <Path d="m12 6 .081.003.12.017.111.03.111.044.098.052.104.074.082.073 3 3a1 1 0 1 1-1.414 1.414L13 9.415V14h5a4 4 0 1 1 0 8H6a4 4 0 1 1 0-8h5V9.415l-1.293 1.292a1 1 0 0 1-1.32.083l-.094-.083a1 1 0 0 1 0-1.414l3-3 .112-.097.11-.071.062-.031.081-.034.076-.024.118-.025.058-.007zm6-4a4 4 0 0 1 4 4 1 1 0 0 1-1.993.117L20 6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2 1 1 0 1 1-2 0 4 4 0 0 1 4-4z" />
      </G>
    </Svg>
  );
};