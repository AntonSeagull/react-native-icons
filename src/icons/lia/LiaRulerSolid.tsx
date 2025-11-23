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

export const LiaRulerSolid = (props: IconProps) => {
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
        <Path d="M20.531 3.594 3.594 20.53l7.875 7.875L28.406 11.47Zm0 2.844 5.032 5.03-14.094 14.095-5.031-5.032 1.156-1.156 2.156 2.156 1.438-1.406L9 17.938l1.188-1.157.874.875 1.407-1.437-.875-.844 1.187-1.187 2.156 2.156 1.407-1.407-2.157-2.156 1.188-1.187.844.875 1.437-1.406-.875-.876L17.938 9l2.187 2.188 1.406-1.438-2.156-2.156Z" />
      </G>
    </Svg>
  );
};