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

export const LiaAngleDoubleRightSolid = (props: IconProps) => {
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
        <Path d="M9.094 4.781 7.688 6.22 17.468 16l-9.78 9.781 1.406 1.438L20.313 16Zm7 0L14.687 6.22 24.47 16l-9.782 9.781 1.407 1.438L27.312 16Z" />
      </G>
    </Svg>
  );
};