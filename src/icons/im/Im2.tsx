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

export const Im2 = (props: IconProps) => {
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
        <Path d="m10.5 3-5-2L0 3v12l5.5-2 5 2 5.5-2V1zM6 2.277l4 1.6v9.846l-4-1.6zM1 3.7l4-1.455v9.872l-4 1.454zm14 8.6-4 1.455V3.883l4-1.455z" />
      </G>
    </Svg>
  );
};