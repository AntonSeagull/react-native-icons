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

export const TbBatteryVerticalEco = (props: IconProps) => {
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
        <Path d="M7 18V7a2 2 0 0 1 2-2h.5c.276 0 .5-.224.5-.5s.224-.5.5-.5h3c.276 0 .5.224.5.5s.224.5.5.5h.5a2 2 0 0 1 2 2v1M9 20a2 2 0 0 1-2-2M13 17.143C13 14.303 15.09 12 17.667 12H20v.857C20 15.697 17.91 18 15.333 18H13zM13 21v-3" />
      </G>
    </Svg>
  );
};