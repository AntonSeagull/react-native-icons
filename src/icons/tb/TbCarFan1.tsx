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

export const TbCarFan1 = (props: IconProps) => {
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
        <Path d="M12 12V3l4.912 1.914a1.7 1.7 0 0 1 .428 2.925zM14.424 15.03 12 12h6M12 12H3l1.914-4.912a1.7 1.7 0 0 1 2.925-.428zM12 12v9l-4.912-1.914a1.7 1.7 0 0 1-.428-2.925zM18 17l2-2v6" />
      </G>
    </Svg>
  );
};