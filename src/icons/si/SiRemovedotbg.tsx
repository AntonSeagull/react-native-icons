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

export const SiRemovedotbg = (props: IconProps) => {
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
        <Path d="m23.729 13.55-1.903-.995-9.134 4.776a1.5 1.5 0 0 1-1.383.002l-9.137-4.778-1.903.995a.5.5 0 0 0 0 .888l11.499 6.011a.5.5 0 0 0 .462 0l11.499-6.011a.5.5 0 0 0 0-.888M.269 10.447l11.499 6.013a.5.5 0 0 0 .462 0l11.499-6.013a.5.5 0 0 0 0-.887l-11.5-6.012a.5.5 0 0 0-.462 0L.268 9.559a.5.5 0 0 0 .001.887z" />
      </G>
    </Svg>
  );
};