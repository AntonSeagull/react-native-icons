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

export const FcFeedIn = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#2196F3" d="M38 24v12c0 1.1-.9 2-2 2H12c-1.1 0-2-.9-2-2V24c0-3.3-2.7-6-6-6v4c1.1 0 2 .9 2 2v12c0 3.3 2.7 6 6 6h24c3.3 0 6-2.7 6-6V24c0-1.1.9-2 2-2v-4c-3.3 0-6 2.7-6 6" />
        <Path d="M38.6 5.6 29 15.2V28h4V16.8l8.4-8.4zM6.6 8.4l8.4 8.4V28h4V15.2L9.4 5.6z" />
        <Path d="m37 27-6 6-6-6zM23 27l-6 6-6-6z" />
      </G>
    </Svg>
  );
};