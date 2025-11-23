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

export const CgArrowAlignH = (props: IconProps) => {
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
        <Path fill="currentColor" d="M13 7h-2v10h2zM6 7.757l1.414 1.415L5.586 11H10v2H5.586l1.828 1.828L6 16.243 1.757 12zM18 16.243l-1.414-1.414L18.414 13H14v-2h4.414l-1.828-1.828L18 7.757 22.243 12z" />
      </G>
    </Svg>
  );
};