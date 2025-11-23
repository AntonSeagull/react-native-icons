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

export const LiaLifeRingSolid = (props: IconProps) => {
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
        <Path d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12 12-5.383 12-12S22.617 4 16 4m0 2c.336 0 .672.031 1 .063v3.03A7 7 0 0 0 16 9c-.34 0-.672.047-1 .094V6.063A11 11 0 0 1 16 6m-3 .438v3.25A7 7 0 0 0 9.688 13h-3.22A9.98 9.98 0 0 1 13 6.438m6 0A10.07 10.07 0 0 1 25.563 13h-3.25A7 7 0 0 0 19 9.688ZM16 11c2.773 0 5 2.227 5 5s-2.227 5-5 5-5-2.227-5-5 2.227-5 5-5m-9.937 4h3A7 7 0 0 0 9 16c0 .34.047.672.094 1H6.063A11 11 0 0 1 6 16c0-.336.031-.672.063-1m16.843 0h3.032c.03.328.062.664.062 1s-.031.672-.062 1h-3.032c.047-.328.094-.66.094-1s-.047-.672-.094-1M6.438 19h3.25A7 7 0 0 0 13 22.313v3.25A10.07 10.07 0 0 1 6.438 19m15.875 0h3.25A10.07 10.07 0 0 1 19 25.563v-3.25A7 7 0 0 0 22.313 19M15 22.906c.328.047.66.094 1 .094s.672-.047 1-.094v3.032A11 11 0 0 1 16 26c-.336 0-.672-.031-1-.062Z" />
      </G>
    </Svg>
  );
};