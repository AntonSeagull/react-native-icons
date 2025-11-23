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

export const PiTextTSlashBold = (props: IconProps) => {
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
        <Path d="M216.07 224.88a12 12 0 0 1-16.95-.81L140 159v29h20a12 12 0 0 1 0 24H96a12 12 0 0 1 0-24h20v-55.36l-48-52.8V88a12 12 0 0 1-24 0V56a11.8 11.8 0 0 1 .23-2.31l-5.11-5.62a12 12 0 1 1 17.76-16.14l160 176a12 12 0 0 1-.81 16.95M116 68v.57a12 12 0 1 0 24 0V68h48v20a12 12 0 0 0 24 0V56a12 12 0 0 0-12-12h-83.4a12 12 0 0 0-.6 24" />
      </G>
    </Svg>
  );
};