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

export const TfiLayoutColumn4 = (props: IconProps) => {
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
        <Path d="M1 17h3V0H1zM2 1h1v15H2zm3 16h3V0H5zM6 1h1v15H6zm3 16h3V0H9zm1-16h1v15h-1zm3-1v17h3V0zm2 16h-1V1h1z" />
      </G>
    </Svg>
  );
};