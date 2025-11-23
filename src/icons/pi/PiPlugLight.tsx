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

export const PiPlugLight = (props: IconProps) => {
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
        <Path d="M236.24 67.76a6 6 0 0 0-8.48 0L192 103.51 152.49 64l35.75-35.76a6 6 0 0 0-8.48-8.48L144 55.51l-27.76-27.75a6 6 0 1 0-8.48 8.48l7.75 7.76-54.38 54.38a38 38 0 0 0 0 53.75l17.13 17.12-50.5 50.51a6 6 0 1 0 8.48 8.48l50.51-50.5 17.13 17.13a38 38 0 0 0 53.74 0L212 140.49l7.76 7.75a6 6 0 0 0 8.48-8.48L200.49 112l35.75-35.76a6 6 0 0 0 0-8.48m-87.11 118.62a26 26 0 0 1-36.77 0l-42.74-42.74a26 26 0 0 1 0-36.77L124 52.49 203.51 132Z" />
      </G>
    </Svg>
  );
};