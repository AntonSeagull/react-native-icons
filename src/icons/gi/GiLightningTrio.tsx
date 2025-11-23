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

export const GiLightningTrio = (props: IconProps) => {
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
        <Path d="m292.53 20.5 19 40.594L66.314 28.75 362.03 158.125l-18.967-40.594 149.218 15.282zm-252 23.375L318.314 413.97 312.906 348l184.97 146.5L294 186.656l5.406 65.97zM20.907 76.22l36.5 316.405L83.03 351.75l68.095 139.344-9.594-241.125-25.624 40.843-95-214.594z" />
      </G>
    </Svg>
  );
};