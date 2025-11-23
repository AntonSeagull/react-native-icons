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

export const LiaOsi = (props: IconProps) => {
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
        <Path d="M16 4C9.383 4 4 9.383 4 16c0 5.125 3.215 9.504 7.75 11.219l.938.375.374-.938 2.47-6.562.343-.938-.937-.343A3 3 0 0 1 13 16c0-1.668 1.332-3 3-3s3 1.332 3 3a3 3 0 0 1-1.937 2.813l-.938.343.344.938 2.468 6.562.375.938.938-.375C24.785 25.504 28 21.125 28 16c0-6.617-5.383-12-12-12m0 2c5.535 0 10 4.465 10 10 0 3.922-2.316 7.203-5.594 8.844l-1.812-4.782C19.977 19.173 21 17.759 21 16c0-2.75-2.25-5-5-5s-5 2.25-5 5c0 1.758 1.023 3.172 2.406 4.063l-1.812 4.78C8.316 23.204 6 19.923 6 16c0-5.535 4.465-10 10-10" />
      </G>
    </Svg>
  );
};