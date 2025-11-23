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

export const LiaPrayingHandsSolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M15 3c-1.645 0-3 1.355-3 3l.016-.164-.985 5.91-1.89 5.172C9.105 16.965 9.062 17 9 17H8v-1H3v13h5v-3h3.926c1.644 0 3.125-.797 4.074-2.035.95 1.238 2.43 2.035 4.074 2.035H24v3h5V16h-5v1h-1c-.062 0-.105-.035-.14-.082l-1.891-5.172-.985-5.91L20 6c0-1.645-1.355-3-3-3-.34 0-.687.066-1 .227A2.2 2.2 0 0 0 15 3m-.035 2.016c.02.144.035.472.035.984v15.438A3.12 3.12 0 0 1 11.926 24H8v-5h1c.785 0 1.516-.426 1.902-1.11l.04-.074 2.027-5.562L14 6.082V6c0-.55.422-.965.965-.984m2.07 0c.543.02.965.433.965.984v.082l1.031 6.172 2.028 5.562.039.075A2.19 2.19 0 0 0 23 19h1v5h-3.926A3.12 3.12 0 0 1 17 21.438V6c0-.512.016-.84.035-.984M5 18h1v9H5Zm21 0h1v9h-1Z" />
      </G>
    </Svg>
  );
};