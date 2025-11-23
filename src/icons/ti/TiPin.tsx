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

export const TiPin = (props: IconProps) => {
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
        <Path d="M16.729 4.271a1 1 0 0 0-1.414-.004 1 1 0 0 0-.225.355c-.832 1.736-1.748 2.715-2.904 3.293C10.889 8.555 9.4 9 7 9a1.006 1.006 0 0 0-.923.617 1 1 0 0 0 .217 1.09l3.243 3.243L5 20l6.05-4.537 3.242 3.242a1 1 0 0 0 .326.217q.185.077.382.078c.197.001.26-.027.382-.078A1 1 0 0 0 16 18c0-2.4.444-3.889 1.083-5.166.577-1.156 1.556-2.072 3.293-2.904a1 1 0 0 0 .354-.225 1 1 0 0 0-.004-1.414z" />
      </G>
    </Svg>
  );
};