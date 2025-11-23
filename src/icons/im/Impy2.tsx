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

export const Impy2 = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3 4c.552 0 1 .672 1 1.5S11.552 7 11 7s-1-.672-1-1.5.448-1.5 1-1.5M5 4c.552 0 1 .672 1 1.5S5.552 7 5 7s-1-.672-1-1.5S4.448 4 5 4m3 10c-2.607 0-4.772-2.186-5-4.973 1.465.846 3.188 1.329 5 1.329s3.535-.481 5-1.327C12.772 11.817 10.607 14 8 14" />
      </G>
    </Svg>
  );
};