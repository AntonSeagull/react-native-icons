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

export const LiaBackspaceSolid = (props: IconProps) => {
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
        <Path d="m11.594 7-.313.281-8 8-.687.719.687.719 8 8 .313.281H29V7Zm.844 2H27v14H12.438l-7-7Zm2.718 2.75-1.406 1.406L16.594 16l-2.844 2.844 1.406 1.406L18 17.406l2.844 2.844 1.406-1.406L19.406 16l2.844-2.844-1.406-1.406L18 14.594Z" />
      </G>
    </Svg>
  );
};