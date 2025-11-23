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

export const PiIdentificationCardBold = (props: IconProps) => {
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
        <Path d="M148 108a12 12 0 0 1 12-12h28a12 12 0 0 1 0 24h-28a12 12 0 0 1-12-12m40 28h-20a12 12 0 0 0 0 24h20a12 12 0 0 0 0-24m48-80v144a20 20 0 0 1-20 20H40a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h176a20 20 0 0 1 20 20m-24 4H44v136h168ZM58.28 159.37A43.8 43.8 0 0 1 71.53 142a36 36 0 1 1 56.94 0 43.84 43.84 0 0 1 13.26 17.37 12 12 0 0 1-22.15 9.26C116.48 161.19 108.42 156 100 156s-16.47 5.2-19.59 12.63a12 12 0 1 1-22.13-9.26M88 120a12 12 0 1 0 12-12 12 12 0 0 0-12 12" />
      </G>
    </Svg>
  );
};