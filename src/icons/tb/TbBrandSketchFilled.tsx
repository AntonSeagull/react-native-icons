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

export const TbBrandSketchFilled = (props: IconProps) => {
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
        <Path d="M7.554 3.004h8.929a2 2 0 0 1 1.647.873l3.536 5.193a2.006 2.006 0 0 1-.173 2.48l-8 8.79a2.007 2.007 0 0 1-2.97 0l-8-8.789a1 1 0 0 1-.13-.175l-.012-.026-.051-.072a2.01 2.01 0 0 1-.056-2.063l.09-.146 3.541-5.193c.372-.544.987-.87 1.649-.872" />
      </G>
    </Svg>
  );
};