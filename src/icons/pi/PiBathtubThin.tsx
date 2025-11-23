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

export const PiBathtubThin = (props: IconProps) => {
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
        <Path d="M240 100h-36v-4a4 4 0 0 0-4-4h-64a4 4 0 0 0-4 4v4H60V52a16 16 0 0 1 16-16 16.49 16.49 0 0 1 16.08 12.8 4 4 0 1 0 7.84-1.6A24.32 24.32 0 0 0 76 28a24 24 0 0 0-24 24v48H16a4 4 0 0 0-4 4v40a52.06 52.06 0 0 0 52 52h4v20a4 4 0 0 0 8 0v-20h104v20a4 4 0 0 0 8 0v-20h4a52.06 52.06 0 0 0 52-52v-40a4 4 0 0 0-4-4m-100 0h56v40h-56Zm96 44a44.05 44.05 0 0 1-44 44H64a44.05 44.05 0 0 1-44-44v-36h112v36a4 4 0 0 0 4 4h64a4 4 0 0 0 4-4v-36h32Z" />
      </G>
    </Svg>
  );
};