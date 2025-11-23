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

export const LiaAngleDoubleDownSolid = (props: IconProps) => {
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
        <Path d="M5.219 6.688 3.78 8.094 16 20.313l12.219-12.22-1.438-1.405L16 17.468Zm0 7L3.78 15.094 16 27.313l12.219-12.22-1.438-1.405L16 24.468Z" />
      </G>
    </Svg>
  );
};