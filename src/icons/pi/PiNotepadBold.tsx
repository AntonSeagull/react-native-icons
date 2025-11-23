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

export const PiNotepadBold = (props: IconProps) => {
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
        <Path d="M172 124a12 12 0 0 1-12 12H96a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12m-12 28H96a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24m60-112v160a36 36 0 0 1-36 36H72a36 36 0 0 1-36-36V40a12 12 0 0 1 12-12h24v-4a12 12 0 0 1 24 0v4h20v-4a12 12 0 0 1 24 0v4h20v-4a12 12 0 0 1 24 0v4h24a12 12 0 0 1 12 12m-24 12h-12v4a12 12 0 0 1-24 0v-4h-20v4a12 12 0 0 1-24 0v-4H96v4a12 12 0 0 1-24 0v-4H60v148a12 12 0 0 0 12 12h112a12 12 0 0 0 12-12Z" />
      </G>
    </Svg>
  );
};