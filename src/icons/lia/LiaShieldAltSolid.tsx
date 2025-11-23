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

export const LiaShieldAltSolid = (props: IconProps) => {
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
        <Path d="M16 4c-2.25 0-3.766.887-5.125 1.625C9.515 6.363 8.281 7 6 7H5v1c0 7.719 2.61 12.742 5.25 15.781 2.64 3.04 5.375 4.157 5.375 4.157l.375.125.375-.125s2.734-1.094 5.375-4.125C24.39 20.78 27 15.746 27 8V7h-1c-2.27 0-3.516-.637-4.875-1.375C19.765 4.887 18.25 4 16 4m0 2c1.75 0 2.754.613 4.156 1.375a12.5 12.5 0 0 0 4.782 1.469c-.192 6.765-2.43 11.066-4.688 13.656-2.047 2.348-3.766 3.129-4.25 3.344-.488-.219-2.203-1.02-4.25-3.375-2.258-2.598-4.496-6.89-4.687-13.625a12.5 12.5 0 0 0 4.78-1.469C13.247 6.613 14.25 6 16 6" />
      </G>
    </Svg>
  );
};