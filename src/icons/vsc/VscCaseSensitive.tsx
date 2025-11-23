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

export const VscCaseSensitive = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M8.854 11.702h-1l-.816-2.159H3.772l-.768 2.16H2L4.954 4h.935zm-2.111-2.97L5.534 5.45a3 3 0 0 1-.118-.515h-.021q-.054.327-.124.515L4.073 8.732zM13.756 11.702h-.88v-.86h-.022q-.574.99-1.692.99-.822 0-1.29-.436-.46-.435-.461-1.155 0-1.54 1.815-1.794l1.65-.23q0-1.403-1.134-1.403-.994 0-1.794.677V6.59q.81-.516 1.87-.516 1.938 0 1.938 2.052zm-.88-2.782-1.327.183q-.614.086-.924.306-.312.215-.312.768 0 .403.285.66.29.253.768.253a1.41 1.41 0 0 0 1.08-.457q.43-.462.43-1.165z" />
      </G>
    </Svg>
  );
};