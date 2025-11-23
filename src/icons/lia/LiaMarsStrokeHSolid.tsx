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

export const LiaMarsStrokeHSolid = (props: IconProps) => {
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
        <Path d="M10 8c-4.406 0-8 3.594-8 8s3.594 8 8 8c4.066 0 7.438-3.066 7.938-7H20v3h2v-3h4.563l-4.282 4.281 1.438 1.438 6-6 .687-.719-.687-.719-6-6-1.438 1.438L26.563 15H22v-3h-2v3h-2.062c-.5-3.934-3.872-7-7.938-7m0 2c3.324 0 6 2.676 6 6s-2.676 6-6 6-6-2.676-6-6 2.676-6 6-6" />
      </G>
    </Svg>
  );
};