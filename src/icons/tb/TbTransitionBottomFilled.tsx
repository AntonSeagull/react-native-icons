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

export const TbTransitionBottomFilled = (props: IconProps) => {
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
        <Path d="M21 17a1 1 0 0 1 1 1 4 4 0 0 1-4 4H6a4 4 0 0 1-4-4 1 1 0 0 1 2 0 2 2 0 0 0 2 2h12a2 2 0 0 0 1.995-1.85L20 18a1 1 0 0 1 1-1m-9 1-.082-.004-.119-.016-.111-.03-.111-.044-.098-.052-.096-.067-.09-.08-3-3a1 1 0 0 1 1.414-1.414L11 14.586V10H6a4 4 0 1 1 0-8h12a4 4 0 1 1 0 8h-5v4.583l1.293-1.29a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 0 1.414l-3 3-.112.097-.11.071-.062.031-.081.034-.076.024-.149.03z" />
      </G>
    </Svg>
  );
};