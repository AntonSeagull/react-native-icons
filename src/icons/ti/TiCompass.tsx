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

export const TiCompass = (props: IconProps) => {
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
        <Path d="M12 5c3.859.001 7 3.142 7 7.001 0 3.858-3.141 6.998-7 6.999s-7-3.14-7-6.999 3.141-7 7-7.001m0-2a9 9 0 0 0 0 18 9 9 0 0 0 0-18m4.182 4.819a.5.5 0 0 0-.491-.127L9.74 9.398a.5.5 0 0 0-.342.343l-1.707 5.951a.496.496 0 0 0 .481.637l.138-.02 5.95-1.708a.5.5 0 0 0 .342-.343l1.707-5.949a.5.5 0 0 0-.127-.49M8.9 15.101l1.383-4.817 3.434 3.435z" />
      </G>
    </Svg>
  );
};