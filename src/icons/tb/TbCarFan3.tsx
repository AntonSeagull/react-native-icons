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

export const TbCarFan3 = (props: IconProps) => {
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
        <Path d="M12 12V3l4.912 1.914a1.7 1.7 0 0 1 .428 2.925zM14.044 14.624 12 12h4M12 12H3l1.914-4.912a1.7 1.7 0 0 1 2.925-.428zM12 12v9l-4.912-1.914a1.7 1.7 0 0 1-.428-2.925zM18 15.5a.5.5 0 0 1 .5-.5h1a1.5 1.5 0 0 1 0 3H19h.5a1.5 1.5 0 0 1 0 3h-1a.5.5 0 0 1-.5-.5" />
      </G>
    </Svg>
  );
};