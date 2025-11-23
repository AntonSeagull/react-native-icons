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

export const TbBadgeVoFilled = (props: IconProps) => {
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
        <Path d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm-3.5 4a2.5 2.5 0 0 0-2.5 2.5v3a2.5 2.5 0 1 0 5 0v-3A2.5 2.5 0 0 0 15.5 8m-4.184.051a1 1 0 0 0-1.265.633L9 11.838 7.949 8.684a1 1 0 0 0-1.898.632l2 6c.304.912 1.594.912 1.898 0l2-6a1 1 0 0 0-.633-1.265M15.5 10a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 0 1 .5-.5" />
      </G>
    </Svg>
  );
};