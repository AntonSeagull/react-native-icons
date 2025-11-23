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

export const LiaAngleDoubleLeftSolid = (props: IconProps) => {
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
        <Path d="M15.906 4.781 4.688 16l11.218 11.219 1.406-1.438L7.533 16l9.78-9.781Zm7 0L11.688 16l11.218 11.219 1.407-1.438L14.53 16l9.782-9.781Z" />
      </G>
    </Svg>
  );
};