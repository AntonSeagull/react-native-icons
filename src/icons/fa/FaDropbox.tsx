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

export const FaDropbox = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 528 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 264, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m264.4 116.3-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32zM131.6 395.7l132-84.3 132 84.3-132 84.3zm132.8-111.6 132-84.3-132-83.6L395.7 32 528 116.3l-132.3 84.3L528 284.8l-132.3 84.3z" />
      </G>
    </Svg>
  );
};