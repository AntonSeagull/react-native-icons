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

export const SiAkaunting = (props: IconProps) => {
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
        <Path d="M15.146 18.673a7.35 7.35 0 0 1-3.148.704 7.34 7.34 0 0 1-4.538-1.561l-3.013 3.511A11.96 11.96 0 0 0 11.998 24c1.913 0 3.721-.448 5.326-1.244zm4.229 2.792V24h4.623V12c0-6.627-5.372-12-12-12C5.473 0 .165 5.208.002 11.693h4.626a7.377 7.377 0 1 1 11.034 6.711l2.177 4.081a12 12 0 0 0 1.536-1.02M7.016 17.44a7.35 7.35 0 0 1-2.389-5.165H.002a11.97 11.97 0 0 0 4.002 8.675z" />
      </G>
    </Svg>
  );
};