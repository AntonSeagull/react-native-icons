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

export const CgArrowsScrollH = (props: IconProps) => {
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
        <Path fill="currentColor" d="m15.305 12 2.825-2.825-1.414-1.414-2.825 2.825-.004-.004-1.414 1.414.004.004-.004.004 1.414 1.414.004-.004 2.825 2.825 1.414-1.414zM10.11 10.586l.003-.004 1.414 1.414-.004.004.004.004-1.414 1.414-.004-.004-2.825 2.825-1.414-1.414L8.695 12 5.87 9.175l1.414-1.414z" />
      </G>
    </Svg>
  );
};