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

export const HiOutlineListBullet = (props: IconProps) => {
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
        <Path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0M3.75 12h.007v.008H3.75zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0m-.375 5.25h.007v.008H3.75zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0" />
      </G>
    </Svg>
  );
};