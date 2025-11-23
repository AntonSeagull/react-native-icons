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

export const LiaCalendar = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M9 4v1H5v22h22V5h-4V4h-2v1H11V4ZM7 7h2v1h2V7h10v1h2V7h2v2H7Zm0 4h18v14H7Zm6 2v2h2v-2Zm4 0v2h2v-2Zm4 0v2h2v-2ZM9 17v2h2v-2Zm4 0v2h2v-2Zm4 0v2h2v-2Zm4 0v2h2v-2ZM9 21v2h2v-2Zm4 0v2h2v-2Zm4 0v2h2v-2Z" />
      </G>
    </Svg>
  );
};