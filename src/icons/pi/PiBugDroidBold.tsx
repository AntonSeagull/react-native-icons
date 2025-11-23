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

export const PiBugDroidBold = (props: IconProps) => {
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
        <Path d="m197.35 51.62 11.14-11.13a12 12 0 1 0-17-17l-12.15 12.2a91.84 91.84 0 0 0-102.68 0L64.49 23.51a12 12 0 0 0-17 17l11.16 11.11A91.58 91.58 0 0 0 36 112v40a92 92 0 0 0 184 0v-40a91.58 91.58 0 0 0-22.65-60.38M196 112v4H60v-4a68 68 0 0 1 136 0m-68 108a68.07 68.07 0 0 1-68-68v-12h136v12a68.07 68.07 0 0 1-68 68m12-132a16 16 0 1 1 16 16 16 16 0 0 1-16-16m-56 0a16 16 0 1 1 16 16 16 16 0 0 1-16-16" />
      </G>
    </Svg>
  );
};