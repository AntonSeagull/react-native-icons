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

export const TfiCrown = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M12.626 6.743 8.543.07 4.332 6.745-.167 2.912 1.572 16h13.855l1.738-13.075zM2.447 15l-.133-1h12.371l-.133 1zm12.371-2H2.182L1.167 5.363l3.396 2.892 3.967-6.29 3.851 6.292 3.454-2.906z" />
      </G>
    </Svg>
  );
};