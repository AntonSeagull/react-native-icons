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

export const PiMicrosoftPowerpointLogoFill = (props: IconProps) => {
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
        <Path d="M136 24a104.33 104.33 0 0 0-82 40H40a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h14a104 104 0 1 0 82-168M72 152v-48a8 8 0 0 1 8-8h16a24 24 0 0 1 0 48h-8v8a8 8 0 0 1-16 0m56 63.63A88.36 88.36 0 0 1 75.63 192H128ZM128 64H75.63A88.36 88.36 0 0 1 128 40.37Zm16-23.63A88.13 88.13 0 0 1 223.63 120H160V80a16 16 0 0 0-16-16Zm0 175.26V192a16 16 0 0 0 16-16v-40h63.63A88.13 88.13 0 0 1 144 215.63M96 128h-8v-16h8a8 8 0 0 1 0 16" />
      </G>
    </Svg>
  );
};