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

export const PiGooglePlayLogoThin = (props: IconProps) => {
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
        <Path d="M237.89 117.69 70.05 21.62a12 12 0 0 0-12.13 0A11.69 11.69 0 0 0 52 31.87v192.26a11.69 11.69 0 0 0 5.92 10.21 12 12 0 0 0 12.13 0l167.77-96a11.76 11.76 0 0 0 .07-20.66Zm-52.44-20.8L160 122.34 66.4 28.75ZM60 222.33V33.67L154.34 128Zm6.4 4.92 93.6-93.59 25.45 25.45Zm167.51-95.88L192.65 155l-27-27 27-27L234 124.66a3.77 3.77 0 0 1-.07 6.71Z" />
      </G>
    </Svg>
  );
};