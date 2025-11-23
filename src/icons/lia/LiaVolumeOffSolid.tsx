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

export const LiaVolumeOffSolid = (props: IconProps) => {
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
        <Path d="M15 4.594 13.281 6.28 8.562 11H4v10h4.563l4.718 4.719L15 27.406Zm-2 4.844v13.125L9.719 19.28 9.406 19H6v-6h3.406l.313-.281Zm7.219 2.343L18.78 13.22 21.563 16l-2.782 2.781 1.438 1.438L23 17.437l2.781 2.782 1.438-1.438L24.437 16l2.782-2.781-1.438-1.438L23 14.562Z" />
      </G>
    </Svg>
  );
};