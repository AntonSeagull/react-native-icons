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

export const TbJetpack = (props: IconProps) => {
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
        <Path d="M10 6a3 3 0 1 0-6 0v7h6zM14 13h6V6a3 3 0 0 0-6 0zM5 16q0 3.5 2 5 2-1.5 2-5M15 16q0 3.5 2 5 2-1.5 2-5M10 8h4M10 11h4" />
      </G>
    </Svg>
  );
};