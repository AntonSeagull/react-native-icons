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

export const PiMediumLogoLight = (props: IconProps) => {
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
        <Path d="M72 66a62 62 0 1 0 62 62 62.07 62.07 0 0 0-62-62m0 112a50 50 0 1 1 50-50 50.06 50.06 0 0 1-50 50M184 66c-17.1 0-30 26.65-30 62s12.9 62 30 62 30-26.65 30-62-12.9-62-30-62m0 112c-7.34 0-18-19.48-18-50s10.66-50 18-50 18 19.48 18 50-10.66 50-18 50m62-106v112a6 6 0 0 1-12 0V72a6 6 0 0 1 12 0" />
      </G>
    </Svg>
  );
};