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

export const PiSoundcloudLogoLight = (props: IconProps) => {
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
        <Path d="M22 120v48a6 6 0 0 1-12 0v-48a6 6 0 0 1 12 0m26-30a6 6 0 0 0-6 6v96a6 6 0 0 0 12 0V96a6 6 0 0 0-6-6m32-8a6 6 0 0 0-6 6v104a6 6 0 0 0 12 0V88a6 6 0 0 0-6-6m32-32a6 6 0 0 0-6 6v136a6 6 0 0 0 12 0V56a6 6 0 0 0-6-6m109.06 57.88A78 78 0 0 0 144 42a6 6 0 0 0 0 12 65.75 65.75 0 0 1 65.67 59.33 6 6 0 0 0 4.83 5.29A34 34 0 0 1 208 186h-64a6 6 0 0 0 0 12h64a46 46 0 0 0 13.06-90.12" />
      </G>
    </Svg>
  );
};