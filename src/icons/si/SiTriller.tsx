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

export const SiTriller = (props: IconProps) => {
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
        <Path d="M15.548 5.216 7.005 20.012l-.29-.167 8.54-14.788a9.37 9.37 0 0 0-6.07-.906L2.73 15.333l-.609 1.055a9.34 9.34 0 0 0 3.818 4.806l-1.522 2.64.289.166 2.303-3.987h-.002a9.37 9.37 0 0 0 6.068.905l6.321-10.945.287.167-6.168 10.683-.964 1.67a9.32 9.32 0 0 0 7.55-7.555 9.27 9.27 0 0 0-.413-4.802l2.299-3.982-.29-.167L20.14 8.68a9.34 9.34 0 0 0-3.816-4.806zm-5.842-2.64a9.324 9.324 0 0 0-7.132 12.359L8.893 3.989l.292.162L11.483.167 11.193 0z" />
      </G>
    </Svg>
  );
};