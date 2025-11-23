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

export const CgAppleWatch = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M16.498 5.03q0 .072-.005.143A3 3 0 0 1 18.5 8.005v1h1v4h-1v3c0 1.308-.837 2.42-2.005 2.83q.005.085.005.17a3 3 0 0 1-3 3h-4a3 3 0 0 1-2.995-3.17 3 3 0 0 1-2.005-2.83v-8c0-1.307.836-2.42 2.003-2.83a3 3 0 0 1 3.01-3.18l4 .02a3 3 0 0 1 2.984 3.015m-8-.025h6a1 1 0 0 0-.995-.99l-4-.02a1 1 0 0 0-1.005.995zm7.207 2.021-4.22-.021H7.5a1 1 0 0 0-1 1v8a1 1 0 0 0 .999 1H15.5a1 1 0 0 0 .999-1v-8a1 1 0 0 0-.795-.979M8.5 19.005a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};