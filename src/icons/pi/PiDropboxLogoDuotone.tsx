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

export const PiDropboxLogoDuotone = (props: IconProps) => {
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
        <Path d="m128 84-52 36-52-36 52-36Zm104 0-52-36-52 36 52 36ZM24 156l52 36 52-36-52-36Zm104 0 52 36 52-36-52-36Z" opacity={0.2} />
        <Path d="M236.55 149.42 194.05 120l42.5-29.42a8 8 0 0 0 0-13.16l-52-36a8 8 0 0 0-9.1 0L128 74.27 80.55 41.42a8 8 0 0 0-9.1 0l-52 36a8 8 0 0 0 0 13.16L62 120l-42.5 29.42a8 8 0 0 0 0 13.16l52 36a8 8 0 0 0 9.1 0l47.4-32.85 47.45 32.85a8 8 0 0 0 9.1 0l52-36a8 8 0 0 0 0-13.16M180 57.73 218 84l-38 26.27L142.05 84ZM38.05 84 76 57.73 114 84l-38 26.27Zm38 98.27-38-26.27 38-26.27L114 156Zm14-62.27 38-26.27L166 120l-38 26.27Zm90 62.27-38-26.27L180 129.73 218 156Zm-21.53 24.64a8 8 0 0 1-2 11.13l-23.89 16.54a8 8 0 0 1-9.1 0L99.56 218a8 8 0 0 1 9.1-13.16L128 218.27l19.34-13.39a8 8 0 0 1 11.13 2.03Z" />
      </G>
    </Svg>
  );
};