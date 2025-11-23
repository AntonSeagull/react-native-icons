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

export const Imice = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M0 16h8V0H0zM5 2h2v2H5zm0 4h2v2H5zm0 4h2v2H5zM1 2h2v2H1zm0 4h2v2H1zm0 4h2v2H1zm8-5h7v1H9zm0 11h2v-4h3v4h2V7H9z" />
      </G>
    </Svg>
  );
};