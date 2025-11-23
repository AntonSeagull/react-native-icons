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

export const CgPinAlt = (props: IconProps) => {
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
        <Path fill="currentColor" d="M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
        <Path fill="currentColor" fillRule="evenodd" d="M18 9a6 6 0 0 1-5 5.917V20a1 1 0 1 1-2 0v-5.083A6.002 6.002 0 0 1 12 3a6 6 0 0 1 6 6m-6 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8" clipRule="evenodd" />
      </G>
    </Svg>
  );
};