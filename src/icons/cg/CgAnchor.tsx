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

export const CgAnchor = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M15 6a3 3 0 0 1-2 2.83v8.044c1.725-.444 3-2.01 3-3.874h2a6 6 0 0 1-5 5.917V20a1 1 0 1 1-2 0v-1.083A6 6 0 0 1 6 13h2a4 4 0 0 0 3 3.874V8.829A3.001 3.001 0 1 1 15 6m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" clipRule="evenodd" />
      </G>
    </Svg>
  );
};