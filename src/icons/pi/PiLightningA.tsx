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

export const PiLightningA = (props: IconProps) => {
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
        <Path d="M175.84 111.54a8 8 0 0 0-4.56-5.7l-50-22.43L135 25.85a8 8 0 0 0-13.65-7.28L26.13 121.42a8 8 0 0 0 2.59 12.73l50 22.44L65 214.15a8 8 0 0 0 13.65 7.28l95.2-102.85a8 8 0 0 0 1.99-7.04m-88.22 76.67 8.16-34.36a8 8 0 0 0-4.5-9.15l-45.85-20.58 66.95-72.33-8.16 34.36a8 8 0 0 0 4.5 9.15l45.84 20.58Zm151.53 24.21-36-72a8 8 0 0 0-14.31 0l-36 72a8 8 0 0 0 14.31 7.16l9.79-19.58h38.11l9.79 19.58A8 8 0 0 0 232 224a8 8 0 0 0 7.15-11.58M184.94 184 196 161.89 207.05 184Z" />
      </G>
    </Svg>
  );
};