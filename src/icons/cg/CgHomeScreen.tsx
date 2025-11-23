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

export const CgHomeScreen = (props: IconProps) => {
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
        <Path fill="currentColor" d="M10 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2M10 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2M13 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M12 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2M13 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2M16 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0M15 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
        <Path fill="currentColor" fillRule="evenodd" d="M8 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3zm8 2H8a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1" clipRule="evenodd" />
      </G>
    </Svg>
  );
};