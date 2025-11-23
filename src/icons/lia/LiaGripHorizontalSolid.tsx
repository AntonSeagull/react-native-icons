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

export const LiaGripHorizontalSolid = (props: IconProps) => {
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
        <Path d="M2 7v8h8V7zm10 0v8h8V7zm10 0v8h8V7zM4 9h4v4H4zm10 0h4v4h-4zm10 0h4v4h-4zM2 17v8h8v-8zm10 0v8h8v-8zm10 0v8h8v-8zM4 19h4v4H4zm10 0h4v4h-4zm10 0h4v4h-4z" />
      </G>
    </Svg>
  );
};