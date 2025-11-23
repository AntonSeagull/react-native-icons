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

export const CgInbox = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v15a2 2 0 0 1-2 2H8.148a2 2 0 0 1-.148.005H4a2 2 0 0 1-2-2zm3-1h14a1 1 0 0 1 1 1v9h-4a2 2 0 0 0-2 2v1h-4v-.995a2 2 0 0 0-2-2H4V5a1 1 0 0 1 1-1" clipRule="evenodd" />
      </G>
    </Svg>
  );
};