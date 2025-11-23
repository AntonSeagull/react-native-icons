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

export const LiaUsb = (props: IconProps) => {
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
        <Path d="m16 3-3 5h2v12.063c-.781-.329-1.59-.454-2.344-.563-.875-.125-1.672-.25-2.094-.469S10 18.707 10 18v-2.281c.598-.348 1-.98 1-1.719a1.999 1.999 0 1 0-4 0c0 .738.402 1.371 1 1.719V18c0 1.293.734 2.313 1.625 2.781.89.469 1.844.594 2.719.719s1.672.25 2.094.469S15 22.293 15 23v.187c-1.16.415-2 1.512-2 2.813a3 3 0 0 0 6 0c0-1.3-.84-2.398-2-2.812A.8.8 0 0 0 17 23v-1.844c.004-.05.004-.105 0-.156 0-.668.191-.863.75-1.187s1.5-.594 2.5-.844 2.059-.48 3-1.032C24.191 17.388 25 16.333 25 15v-2h1V9h-4v4h1v2c0 .668-.191.863-.75 1.188s-1.5.593-2.5.843c-.914.227-1.875.453-2.75.907V8h2Z" />
      </G>
    </Svg>
  );
};