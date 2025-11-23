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

export const PiSparkleBold = (props: IconProps) => {
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
        <Path d="m199 125.31-49.88-18.39L130.69 57a19.92 19.92 0 0 0-37.38 0l-18.39 49.92L25 125.31a19.92 19.92 0 0 0 0 37.38l49.88 18.39L93.31 231a19.92 19.92 0 0 0 37.38 0l18.39-49.88L199 162.69a19.92 19.92 0 0 0 0-37.38m-63.38 35.16a12 12 0 0 0-7.11 7.11L112 212.28l-16.47-44.7a12 12 0 0 0-7.11-7.11L43.72 144l44.7-16.47a12 12 0 0 0 7.11-7.11L112 75.72l16.47 44.7a12 12 0 0 0 7.11 7.11l44.7 16.47ZM140 40a12 12 0 0 1 12-12h12V16a12 12 0 0 1 24 0v12h12a12 12 0 0 1 0 24h-12v12a12 12 0 0 1-24 0V52h-12a12 12 0 0 1-12-12m112 48a12 12 0 0 1-12 12h-4v4a12 12 0 0 1-24 0v-4h-4a12 12 0 0 1 0-24h4v-4a12 12 0 0 1 24 0v4h4a12 12 0 0 1 12 12" />
      </G>
    </Svg>
  );
};