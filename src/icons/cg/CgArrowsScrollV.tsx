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

export const CgArrowsScrollV = (props: IconProps) => {
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
        <Path fill="currentColor" d="m13.414 10.11.004.003-1.414 1.414-.004-.004-.004.004-1.414-1.414.004-.004L7.76 7.284 9.175 5.87 12 8.695l2.825-2.825 1.414 1.414zM12 15.305l2.825 2.825 1.414-1.414-2.825-2.825.004-.004-1.414-1.414-.004.004-.004-.004-1.414 1.414.004.004-2.825 2.825 1.414 1.414z" />
      </G>
    </Svg>
  );
};