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

export const RiPieChart2Line = (props: IconProps) => {
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
        <Path d="M12 .5C18.351.5 23.5 5.649 23.5 12q0 .505-.043 1h-1.506c-.502 5.053-4.766 9-9.951 9-5.523 0-10-4.477-10-10 0-5.185 3.947-9.449 9-9.95V.542Q11.495.5 12 .5m-1 3.562A8.001 8.001 0 0 0 12 20a8 8 0 0 0 7.938-7H11zm2-1.51V11h8.448A9.5 9.5 0 0 0 13 2.552" />
      </G>
    </Svg>
  );
};