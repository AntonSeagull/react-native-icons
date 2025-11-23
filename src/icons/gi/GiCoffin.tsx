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

export const GiCoffin = (props: IconProps) => {
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
        <Path d="m312.094 21.97 59.094 119.686h52.093L362.595 22l-50.5-.03zM173 22.687l-63.594 127.218 65.844 345.75 114.688.094L354.467 150 291.626 22.75zm16.063 76.28h88.78v18.688h-88.78V98.97zm0 36.22h88.78v18.687h-88.78zm182.5 25.156L309 495.438l47.25.03 68.313-335.124z" />
      </G>
    </Svg>
  );
};