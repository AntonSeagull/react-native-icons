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

export const CgArrowsExpandLeft = (props: IconProps) => {
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
        <Path fill="currentColor" d="M10.1 4.1v-2h-8v8h2V5.516l5.779 5.778 1.414-1.414L5.515 4.1zM19.9 13.9h2v8h-8v-2h4.585l-5.778-5.779 1.414-1.414 5.778 5.778z" />
      </G>
    </Svg>
  );
};