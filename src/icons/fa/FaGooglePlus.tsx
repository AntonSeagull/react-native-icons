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

export const FaGooglePlus = (props: IconProps) => {
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
        <Path d="M256 8C119.1 8 8 119.1 8 256s111.1 248 248 248 248-111.1 248-248S392.9 8 256 8m-70.7 372a124 124 0 0 1 0-248c31.3 0 60.1 11 83 32.3l-33.6 32.6c-13.2-12.9-31.3-19.1-49.4-19.1-42.9 0-77.2 35.5-77.2 78.1s34.2 78.1 77.2 78.1c32.6 0 64.9-19.1 70.1-53.3h-70.1v-42.6h116.9a109 109 0 0 1 1.9 20.7c0 70.8-47.5 121.2-118.8 121.2m230.2-106.2v35.5H380v-35.5h-35.5v-35.5H380v-35.5h35.5v35.5h35.2v35.5Z" />
      </G>
    </Svg>
  );
};