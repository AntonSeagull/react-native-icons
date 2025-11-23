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

export const LiaGripVerticalSolid = (props: IconProps) => {
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
        <Path d="M7 2v8h8V2zm10 0v8h8V2zM9 4h4v4H9zm10 0h4v4h-4zM7 12v8h8v-8zm10 0v8h8v-8zm-8 2h4v4H9zm10 0h4v4h-4zM7 22v8h8v-8zm10 0v8h8v-8zm-8 2h4v4H9zm10 0h4v4h-4z" />
      </G>
    </Svg>
  );
};