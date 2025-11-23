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

export const PiCassetteTapeLight = (props: IconProps) => {
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
        <Path d="M224 50H32a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h192a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14M76 194l15-20h74l15 20Zm150-2a2 2 0 0 1-2 2h-29l-22.2-29.6a6 6 0 0 0-4.8-2.4H88a6 6 0 0 0-4.8 2.4L61 194H32a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h192a2 2 0 0 1 2 2ZM176 82H80a30 30 0 0 0 0 60h96a30 30 0 0 0 0-60m-24 12a29.92 29.92 0 0 0 0 36h-48a29.92 29.92 0 0 0 0-36Zm-90 18a18 18 0 1 1 18 18 18 18 0 0 1-18-18m114 18a18 18 0 1 1 18-18 18 18 0 0 1-18 18" />
      </G>
    </Svg>
  );
};