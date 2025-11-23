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

export const HiOutlineCake = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path strokeLinecap="round" strokeLinejoin="round" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.7 2.7 0 0 1-3 0 2.7 2.7 0 0 0-3 0 2.7 2.7 0 0 1-3 0 2.7 2.7 0 0 0-3 0 2.7 2.7 0 0 1-3 0 2.7 2.7 0 0 0-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v7zm-3-9v-2a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2z" />
      </G>
    </Svg>
  );
};