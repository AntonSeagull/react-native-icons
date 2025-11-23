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

export const PiJeepBold = (props: IconProps) => {
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
        <Path d="M240 84h-6.3l-8.61-40.19A20.11 20.11 0 0 0 205.53 28H50.47a20.11 20.11 0 0 0-19.56 15.81L22.3 84H16a12 12 0 0 0 0 24h4v92a20 20 0 0 0 20 20h28a20 20 0 0 0 20-20v-20h80v20a20 20 0 0 0 20 20h28a20 20 0 0 0 20-20v-92h4a12 12 0 0 0 0-24M53.7 52h148.6l6.86 32H46.84ZM64 196H44v-16h20Zm128 0v-16h20v16Zm20-40h-32v-24a12 12 0 0 0-24 0v24h-16v-24a12 12 0 0 0-24 0v24h-16v-24a12 12 0 0 0-24 0v24H44v-48h168Z" />
      </G>
    </Svg>
  );
};