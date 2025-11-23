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

export const BiGrid = (props: IconProps) => {
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
        <Path d="M15 3H4.984c-1.103 0-2 .897-2 2v14.016c0 1.103.897 2 2 2H19c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm4 5h-3V5h3zM4.984 10h3v4.016h-3zm5 0H14v4.016H9.984zM16 10h3v4.016h-3zm-2-5v3H9.984V5zM7.984 5v3h-3V5zm-3 11.016h3v3h-3zm5 3v-3H14v3zm6.016 0v-3h3.001v3z" />
      </G>
    </Svg>
  );
};