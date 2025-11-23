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

export const GiFallingBoulder = (props: IconProps) => {
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
        <Path d="M130.81 21.785v245.95H43.84L256 489.382l212.158-221.644H381.19V21.786h-39.118v301.028a88 88 0 0 1 .403 8.37c0 48.275-39.334 87.61-87.61 87.61-46.467 0-84.644-36.446-87.44-82.228h-.288V21.786zm127.018 8.485L230.33 261.984 212.82 133.98c-3.592 63.362-25.266 134.536-25.365 196.592 0 37.12 30.29 67.408 67.408 67.408 37.117 0 67.408-30.288 67.408-67.408 0-1.938-.1-3.854-.262-5.752-6.334-49.764-13.546-100.753-20.408-150.924l-13.422 98.135a68 68 0 0 0-1.774-.985zm-2.965 251.572a48.585 48.585 0 0 1 48.73 48.73 48.59 48.59 0 0 1-48.73 48.733 48.587 48.587 0 0 1-48.73-48.733 48.59 48.59 0 0 1 48.73-48.73" />
      </G>
    </Svg>
  );
};