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

export const PiCouchThin = (props: IconProps) => {
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
        <Path d="M236 108.7V72a12 12 0 0 0-12-12H32a12 12 0 0 0-12 12v36.7a12 12 0 0 0-8 11.3v48a12 12 0 0 0 12 12h12v20a4 4 0 0 0 8 0v-20h168v20a4 4 0 0 0 8 0v-20h12a12 12 0 0 0 12-12v-48a12 12 0 0 0-8-11.3M228 72v36h-12a12 12 0 0 0-12 12v20h-72V68h92a4 4 0 0 1 4 4M32 68h92v72H52v-20a12 12 0 0 0-12-12H28V72a4 4 0 0 1 4-4m204 100a4 4 0 0 1-4 4H24a4 4 0 0 1-4-4v-48a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v24a4 4 0 0 0 4 4h160a4 4 0 0 0 4-4v-24a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4Z" />
      </G>
    </Svg>
  );
};