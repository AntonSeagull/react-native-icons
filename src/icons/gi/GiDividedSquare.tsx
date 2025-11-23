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

export const GiDividedSquare = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m247.196 26-104.38 104.358 104.38 104.391zm17.608 0v208.75l104.39-104.392L264.805 26zm116.838 116.805L277.25 247.196H486zm-251.284.011L26 247.196h208.75zM26 264.804l104.358 104.39 104.391-104.39zm251.25 0 104.392 104.38L486 264.804zm-30.054 12.447L142.782 381.64 247.196 486zm17.608 0V486l104.358-104.358z" />
      </G>
    </Svg>
  );
};