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

export const CgEditMask = (props: IconProps) => {
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
        <Path fill="currentColor" d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
        <Path fill="currentColor" fillRule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m-2.97-2.57Q9 19.22 9 19a3 3 0 1 1 5.97.43 8.03 8.03 0 0 0 4.46-4.46q-.21.03-.43.03a3 3 0 1 1 .43-5.97 8.03 8.03 0 0 0-4.46-4.46q.03.21.03.43a3 3 0 1 1-5.97-.43 8.03 8.03 0 0 0-4.46 4.46A3 3 0 0 1 5 9a3 3 0 1 1-.43 5.97 8.03 8.03 0 0 0 4.46 4.46" clipRule="evenodd" />
      </G>
    </Svg>
  );
};