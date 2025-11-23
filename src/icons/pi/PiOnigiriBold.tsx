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

export const PiOnigiriBold = (props: IconProps) => {
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
        <Path d="m235 144.51-55.87-95.86a3 3 0 0 0-.17-.29 60 60 0 0 0-101.96 0 3 3 0 0 0-.17.29L21 144.51A60 60 0 0 0 72.1 236h111.8a60 60 0 0 0 51.1-91.49M156 212h-56v-40h56Zm59.36-18.5A35.55 35.55 0 0 1 183.9 212H180v-44a20 20 0 0 0-20-20H96a20 20 0 0 0-20 20v44h-3.9a36 36 0 0 1-30.58-55l.17-.28 55.82-95.84a36 36 0 0 1 61 0l55.82 95.85.17.28a35.58 35.58 0 0 1 .85 36.49Z" />
      </G>
    </Svg>
  );
};