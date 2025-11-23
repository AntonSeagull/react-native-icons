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

export const PiPaypalLogoBold = (props: IconProps) => {
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
        <Path d="M223.27 91.08a59.8 59.8 0 0 0-19.5-16.27A60 60 0 0 0 144 20H84a20 20 0 0 0-19.4 15.15l-36 144A20 20 0 0 0 48 204h22.39l-1.79 7.15A20 20 0 0 0 88 236h31.5a20 20 0 0 0 19.4-15.15l8.23-32.85H176a60 60 0 0 0 47.29-96.92ZM87.13 44H144a35.77 35.77 0 0 1 28.37 13.85A36.2 36.2 0 0 1 178 68.06c-.66 0-1.31-.06-2-.06h-56a20 20 0 0 0-19.4 15.15L76.39 180H53.13Zm90.76 48.05A35.93 35.93 0 0 1 144 116h-26.87l6-24H176c.62 0 1.26 0 1.89.05m33 44.68A35.94 35.94 0 0 1 176 164h-32a20 20 0 0 0-19.4 15.15L116.39 212H93.13l18-72H144a59.89 59.89 0 0 0 56.1-38.75 36.12 36.12 0 0 1 10.82 35.48Z" />
      </G>
    </Svg>
  );
};