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

export const FaMeh = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 496 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 248, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8m-80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32m176 192H152c-21.2 0-21.2-32 0-32h192c21.2 0 21.2 32 0 32m-16-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32" />
      </G>
    </Svg>
  );
};