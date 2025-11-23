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

export const CgArrowsExpandRight = (props: IconProps) => {
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
        <Path fill="currentColor" d="M13.9 4.1v-2h8v8h-2V5.516l-5.779 5.778-1.414-1.414L18.485 4.1zM4.1 13.9h-2v8h8v-2H5.516l5.778-5.779-1.414-1.414L4.1 18.485z" />
      </G>
    </Svg>
  );
};