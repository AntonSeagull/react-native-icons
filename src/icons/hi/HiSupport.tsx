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

export const HiSupport = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 10, 10)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a4 4 0 0 0 .078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10m-5.165 3.913 1.58 1.58A6 6 0 0 1 10 16a6 6 0 0 1-2.516-.552l1.562-1.562a4 4 0 0 0 1.789.027m-4.677-2.796a4 4 0 0 1-.041-2.08l-.08.08-1.53-1.533A6 6 0 0 0 4 10c0 .954.223 1.856.619 2.657zm1.088-6.45A6 6 0 0 1 10 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4 4 0 0 0-2.346.033L7.246 4.668zM12 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0" clipRule="evenodd" />
      </G>
    </Svg>
  );
};