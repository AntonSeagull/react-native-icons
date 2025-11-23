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

export const PiSpeakerHifiBold = (props: IconProps) => {
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
        <Path d="M192 20H64a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20m-4 192H68V44h120ZM112 76a16 16 0 1 1 16 16 16 16 0 0 1-16-16m16 120a44 44 0 1 0-44-44 44.05 44.05 0 0 0 44 44m0-64a20 20 0 1 1-20 20 20 20 0 0 1 20-20" />
      </G>
    </Svg>
  );
};