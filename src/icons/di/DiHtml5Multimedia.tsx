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

export const DiHtml5Multimedia = (props: IconProps) => {
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
        <Path fill="#444" d="M27.33 7.595h-5.003l-3.535 3.535h5.003zM16.021 11.13l3.535-3.535h-5.002l-3.537 3.535zm7.783 10.308H8.196V11.164l3.568-3.569H6.76L4.657 9.698v15.278h22.685V11.13h-3.538z" />
      </G>
    </Svg>
  );
};