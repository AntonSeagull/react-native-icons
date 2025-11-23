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

export const LiaBasketballBallSolid = (props: IconProps) => {
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
        <Path d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3m-1.125 2.063c.043-.004.082.003.125 0V15h-3.062a12.93 12.93 0 0 0-3.032-7.406c1.645-1.39 3.7-2.301 5.969-2.532m2.125 0a10.9 10.9 0 0 1 6.094 2.53A12.93 12.93 0 0 0 20.062 15H17ZM7.5 9.03A10.88 10.88 0 0 1 9.938 15H5.062A10.9 10.9 0 0 1 7.5 9.031m17 0A10.9 10.9 0 0 1 26.938 15h-4.875A10.88 10.88 0 0 1 24.5 9.031M5.063 17h4.875A10.88 10.88 0 0 1 7.5 22.969 10.9 10.9 0 0 1 5.063 17m6.875 0H15v9.938a10.9 10.9 0 0 1-6.094-2.532A12.93 12.93 0 0 0 11.937 17M17 17h3.063a12.93 12.93 0 0 0 3.03 7.406A10.9 10.9 0 0 1 17 26.938Zm5.063 0h4.875a10.9 10.9 0 0 1-2.438 5.969A10.88 10.88 0 0 1 22.063 17" />
      </G>
    </Svg>
  );
};