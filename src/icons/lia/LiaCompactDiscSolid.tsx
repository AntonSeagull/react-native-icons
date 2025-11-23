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

export const LiaCompactDiscSolid = (props: IconProps) => {
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
        <Path d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12 12-5.383 12-12S22.617 4 16 4m0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16 10.465 6 16 6m-2.781 2.5A8.04 8.04 0 0 0 8.5 13.219l1.875.687a6.02 6.02 0 0 1 3.531-3.531ZM16 13c-1.645 0-3 1.355-3 3s1.355 3 3 3 3-1.355 3-3-1.355-3-3-3m0 2c.563 0 1 .438 1 1s-.437 1-1 1-1-.437-1-1 .438-1 1-1m5.625 3.094a6.02 6.02 0 0 1-3.531 3.531l.687 1.875a8.04 8.04 0 0 0 4.719-4.719Z" />
      </G>
    </Svg>
  );
};