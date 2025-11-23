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

export const PiCirclesThreeBold = (props: IconProps) => {
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
        <Path d="M176 76a48 48 0 1 0-48 48 48.05 48.05 0 0 0 48-48m-48 24a24 24 0 1 1 24-24 24 24 0 0 1-24 24m60 24a48 48 0 1 0 48 48 48.05 48.05 0 0 0-48-48m0 72a24 24 0 1 1 24-24 24 24 0 0 1-24 24M68 124a48 48 0 1 0 48 48 48.05 48.05 0 0 0-48-48m0 72a24 24 0 1 1 24-24 24 24 0 0 1-24 24" />
      </G>
    </Svg>
  );
};