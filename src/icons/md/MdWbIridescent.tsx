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

export const MdWbIridescent = (props: IconProps) => {
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
        <Path d="M5 14.5h14v-6H5zM11 .55V3.5h2V.55zm8.04 2.5-1.79 1.79 1.41 1.41 1.8-1.79zM13 22.45V19.5h-2v2.95zm7.45-3.91-1.8-1.79-1.41 1.41 1.79 1.8zM3.55 4.46l1.79 1.79 1.41-1.41-1.79-1.79zm1.41 15.49 1.79-1.8-1.41-1.41-1.79 1.79z" />
      </G>
    </Svg>
  );
};