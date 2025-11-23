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

export const PiFlowerTulipDuotone = (props: IconProps) => {
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
        <Path d="M169.23 66A80 80 0 0 0 128 136a80 80 0 0 0-41.23-70C100 38 128 24 128 24s28 14 41.23 42" opacity={0.2} />
        <Path d="M208 48a87.5 87.5 0 0 0-35.36 7.43c-15.1-25.37-39.92-38-41.06-38.59a8 8 0 0 0-7.16 0c-1.14.58-26 13.22-41.06 38.59A87.5 87.5 0 0 0 48 48a8 8 0 0 0-8 8v40a88.11 88.11 0 0 0 80 87.63v35.43l-36.42-18.22a8 8 0 1 0-7.16 14.32l48 24a8 8 0 0 0 7.16 0l48-24a8 8 0 0 0-7.16-14.32L136 219.06v-35.43A88.11 88.11 0 0 0 216 96V56a8 8 0 0 0-8-8m-80-14.79c6.65 4.08 21.08 14.19 30.64 30A88.46 88.46 0 0 0 128 99.36a88.4 88.4 0 0 0-30.64-36.17c9.57-15.79 23.99-25.9 30.64-29.98M56 96V64.44A72.1 72.1 0 0 1 120 136v31.56A72.1 72.1 0 0 1 56 96m144 0a72.1 72.1 0 0 1-64 71.56V136a72.1 72.1 0 0 1 64-71.56Z" />
      </G>
    </Svg>
  );
};