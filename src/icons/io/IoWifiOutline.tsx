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

export const IoWifiOutline = (props: IconProps) => {
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
        <Path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M318.586 363.5 256 424l-62.586-60.5S212 336 256 336s62.586 27.5 62.586 27.5M407.31 278 372 312s-41-46-116-46-116 46-116 46l-35.31-34S142.5 214 256 214s151.31 64 151.31 64" />
        <Path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="m496 192-36.69 35.5S386.5 141 256 141 52.69 227.5 52.69 227.5L16 192S88 88 256 88s240 104 240 104" />
      </G>
    </Svg>
  );
};