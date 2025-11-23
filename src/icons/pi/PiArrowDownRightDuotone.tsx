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

export const PiArrowDownRightDuotone = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M192 88v104H88Z" opacity={0.2} />
        <Path d="M195.06 80.61a8 8 0 0 0-8.72 1.73L140 128.69 69.66 58.34a8 8 0 0 0-11.32 11.32L128.69 140l-46.35 46.34A8 8 0 0 0 88 200h104a8 8 0 0 0 8-8V88a8 8 0 0 0-4.94-7.39M184 184h-76.69l38.34-38.34L184 107.31Z" />
      </G>
    </Svg>
  );
};