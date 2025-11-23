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

export const LiaOpencart = (props: IconProps) => {
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
        <Path d="M1 5.25c2.934 5.566 8.117 6.434 14.406 6.563 3.711.078 11.875-.239 11.875 1.75 0 1.492-5.437 6.167-5.437 7.124 0 0 3.77-3.187 5.875-5.062S31 12.641 31 11.531c0-2.258-8.73-1.844-15.781-1.844S4.313 8.353 1 5.25m7.875 17.281c-1.168 0-2.125.926-2.125 2.094s.957 2.125 2.125 2.125 2.094-.957 2.094-2.125a2.08 2.08 0 0 0-2.094-2.094m9.75 0a2.08 2.08 0 0 0-2.094 2.094c0 1.168.926 2.125 2.094 2.125a2.13 2.13 0 0 0 2.125-2.125c0-1.168-.957-2.094-2.125-2.094" />
      </G>
    </Svg>
  );
};