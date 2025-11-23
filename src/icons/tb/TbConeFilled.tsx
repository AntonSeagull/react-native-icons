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

export const TbConeFilled = (props: IconProps) => {
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
        <Path d="M12 1.001c.72 0 1.385.387 1.749 1.03l8.13 14.99a1 1 0 0 1 .121.477v.498c0 2.46-4.306 3.945-9.677 4.002L12 22c-5.52 0-10-1.495-10-4.003v-.5a1 1 0 0 1 .121-.477L10.26 2.015A2 2 0 0 1 12 1" />
      </G>
    </Svg>
  );
};