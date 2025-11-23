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

export const CiSignpostR1 = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M3.563 8h13.9a2.5 2.5 0 0 1 1.744.709l2.25 2.192a1.5 1.5 0 0 1-.007 2.2l-2.243 2.187a2.48 2.48 0 0 1-1.743.712H3.563a1.5 1.5 0 0 1-1.5-1.5v-5a1.5 1.5 0 0 1 1.5-1.5m13.9 7a1.5 1.5 0 0 0 1.046-.425l2.255-2.2a.5.5 0 0 0 .173-.375.5.5 0 0 0-.162-.369l-.01-.01-2.254-2.2A1.5 1.5 0 0 0 17.464 9H3.563a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5Z" data-name="Signpost R 1" />
      </G>
    </Svg>
  );
};