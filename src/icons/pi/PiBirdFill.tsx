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

export const PiBirdFill = (props: IconProps) => {
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
        <Path d="m236.44 73.34-23.23-15.48A60 60 0 0 0 156 16h-.29C122.79 16.16 96 43.47 96 76.89v19.74L11.63 197.88l-.1.12A16 16 0 0 0 24 224h88a104.11 104.11 0 0 0 104-104v-19.72l20.44-13.62a8 8 0 0 0 0-13.32m-110.29 59.78-60 72a8 8 0 1 1-12.29-10.24l60-72a8 8 0 1 1 12.29 10.24M164 80a12 12 0 1 1 12-12 12 12 0 0 1-12 12" />
      </G>
    </Svg>
  );
};