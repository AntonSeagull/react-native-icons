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

export const TbBoxAlignTopFilled = (props: IconProps) => {
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
        <Path d="M19 3.005H5a2 2 0 0 0-2 2v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-5a2 2 0 0 0-2-2M4 13.995a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L3 14.995a1 1 0 0 1 1-1M4 18.995a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L3 19.995a1 1 0 0 1 1-1M9 18.995a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L8 19.995a1 1 0 0 1 1-1M15 18.995a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L14 19.995a1 1 0 0 1 1-1M20 18.995a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L19 19.995a1 1 0 0 1 1-1M20 13.995a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L19 14.995a1 1 0 0 1 1-1" />
      </G>
    </Svg>
  );
};