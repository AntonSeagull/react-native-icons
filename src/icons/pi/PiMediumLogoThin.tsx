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

export const PiMediumLogoThin = (props: IconProps) => {
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
        <Path d="M72 68a60 60 0 1 0 60 60 60.07 60.07 0 0 0-60-60m0 112a52 52 0 1 1 52-52 52.06 52.06 0 0 1-52 52M184 68c-16 0-28 25.79-28 60s12 60 28 60 28-25.79 28-60-12-60-28-60m0 112c-9.46 0-20-21.36-20-52s10.54-52 20-52 20 21.36 20 52-10.54 52-20 52m60-108v112a4 4 0 0 1-8 0V72a4 4 0 0 1 8 0" />
      </G>
    </Svg>
  );
};