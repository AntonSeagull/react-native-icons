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

export const FcTodoList = (props: IconProps) => {
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
        <Path d="m17.8 18.1-7.4 7.3-4.2-4.1L4 23.5l6.4 6.4 9.6-9.6zM17.8 5.1l-7.4 7.3-4.2-4.1L4 10.5l6.4 6.4L20 7.3zM17.8 31.1l-7.4 7.3-4.2-4.1L4 36.5l6.4 6.4 9.6-9.6z" />
        <Path d="M24 22h20v4H24zM24 9h20v4H24zM24 35h20v4H24z" />
      </G>
    </Svg>
  );
};