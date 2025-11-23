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

export const TbHelicopterLandingFilled = (props: IconProps) => {
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
        <Path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-4 5a1 1 0 0 0-1 1v3h-4V8a1 1 0 0 0-.883-.993L9 7a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0v-3h4v3a1 1 0 0 0 .883.993L15 17a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1" />
      </G>
    </Svg>
  );
};