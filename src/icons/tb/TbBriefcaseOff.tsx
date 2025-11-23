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

export const TbBriefcaseOff = (props: IconProps) => {
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
        <Path d="M11 7h8a2 2 0 0 1 2 2v8m-1.166 2.818A2 2 0 0 1 19 20H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2M8.185 4.158A2 2 0 0 1 10 3h4a2 2 0 0 1 2 2v2M12 12v.01" />
        <Path d="M3 13a20 20 0 0 0 11.905 1.928m3.263-.763A20 20 0 0 0 21 13M3 3l18 18" />
      </G>
    </Svg>
  );
};