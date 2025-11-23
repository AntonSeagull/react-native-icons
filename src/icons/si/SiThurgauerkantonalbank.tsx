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

export const SiThurgauerkantonalbank = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M21.872 2.262H10.775l-6.14 9.743 6.14 9.771h11.097l-6.135-9.77zM0 .297v23.406h24V.297zm23.057 22.486L.943 22.778V1.228h22.109z" />
      </G>
    </Svg>
  );
};