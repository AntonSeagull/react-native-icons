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

export const CiHashtag = (props: IconProps) => {
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
        <Path d="M20.435 15.506H16.2l.61-7h3.63a.5.5 0 0 0 .5-.5.5.5 0 0 0-.5-.5H16.9l.34-3.87a.51.51 0 0 0-.46-.54.5.5 0 0 0-.54.46l-.35 3.95H8.9l.34-3.87a.51.51 0 0 0-.46-.54.49.49 0 0 0-.54.46l-.35 3.95H3.565a.5.5 0 0 0-.5.5.5.5 0 0 0 .5.5h4.24l-.62 7h-3.62a.5.5 0 0 0-.5.5.5.5 0 0 0 .5.5h3.54l-.34 3.86a.51.51 0 0 0 .45.54h.05a.516.516 0 0 0 .5-.46l.34-3.94h7l-.34 3.86a.51.51 0 0 0 .45.54h.05a.516.516 0 0 0 .5-.46l.34-3.94h4.33a.5.5 0 0 0 .5-.5.5.5 0 0 0-.5-.5m-5.25 0H8.2l.61-7h7Z" />
      </G>
    </Svg>
  );
};