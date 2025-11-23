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

export const PiOrangeSliceThin = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M248 84H8a4 4 0 0 0-4 4 124 124 0 0 0 248 0 4 4 0 0 0-4-4M71.53 150.13 124 97.66v74.24a83.67 83.67 0 0 1-52.47-21.77m-5.66-5.66A83.67 83.67 0 0 1 44.1 92h74.24ZM132 97.66l52.47 52.47A83.67 83.67 0 0 1 132 171.9Zm58.13 46.81L137.66 92h74.24a83.67 83.67 0 0 1-21.77 52.47M128 204A116.14 116.14 0 0 1 12.07 92h24a92 92 0 0 0 183.82 0h24A116.14 116.14 0 0 1 128 204" />
      </G>
    </Svg>
  );
};