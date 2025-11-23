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

export const LiaWheelchairSolid = (props: IconProps) => {
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
        <Path d="M20 3c-1.645 0-3 1.355-3 3s1.355 3 3 3 3-1.355 3-3-1.355-3-3-3m0 2c.563 0 1 .438 1 1s-.437 1-1 1-1-.437-1-1 .438-1 1-1m-5.469 2.781-3.594.407a1.97 1.97 0 0 0-1.437.906L7 12.969l1.688 1.062 2.5-3.844 2.28-.25L12 14.095c-3.383.488-6 3.39-6 6.906 0 3.855 3.145 7 7 7s7-3.145 7-7c0-.34-.047-.672-.094-1h1.282l1.343 6.094 1.938-.438-1.313-6.093C22.957 18.648 22.121 18 21.188 18h-1.875a7 7 0 0 0-1.657-2.187l1.157-3.22a3 3 0 0 0-1.407-3.655L15.72 8v.031c-.36-.191-.785-.297-1.188-.25m1 2.407.938.5c.445.238.64.746.468 1.218l-1 2.75a6.9 6.9 0 0 0-1.843-.562ZM13 16c2.773 0 5 2.227 5 5s-2.227 5-5 5-5-2.227-5-5 2.227-5 5-5" />
      </G>
    </Svg>
  );
};