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

export const TbMagnetFilled = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M21 9v4a9 9 0 0 1-18 0V9h7v4a2 2 0 1 0 4 0V9zm-3-7a3 3 0 0 1 3 3v2h-7V5a3 3 0 0 1 3-3zM7 2a3 3 0 0 1 3 3v2H3V5a3 3 0 0 1 3-3z" />
      </G>
    </Svg>
  );
};