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

export const TfiNa = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M8.5.5c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8m0 1c1.75 0 3.348.65 4.577 1.716l-9.86 9.861A6.96 6.96 0 0 1 1.5 8.5c0-3.859 3.14-7 7-7m0 14c-1.75 0-3.348-.65-4.577-1.716l9.86-9.861A6.96 6.96 0 0 1 15.5 8.5c0 3.859-3.14 7-7 7" />
      </G>
    </Svg>
  );
};