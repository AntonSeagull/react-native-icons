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

export const LiaGratipay = (props: IconProps) => {
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
        <Path d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12 12-5.383 12-12S22.617 4 16 4m0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16 10.465 6 16 6m-3.5 6a2.497 2.497 0 0 0-2.5 2.5c0 .527.156 1.035.438 1.438 0 .003.03 0 .03 0L16 22.25l5.531-6.312.032-.032A2.497 2.497 0 0 0 19.5 12c-1.767 0-2.189 1.688-3.501 1.688S14.266 12 12.5 12" />
      </G>
    </Svg>
  );
};