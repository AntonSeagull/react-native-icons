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

export const RxCornerTopLeft = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 15 15"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 7.5, 7.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="currentColor" fillRule="evenodd" d="M9.877 3H11.5a.5.5 0 0 1 0 1H9.9c-1.128 0-1.945 0-2.586.053-.637.052-1.057.152-1.403.328a3.5 3.5 0 0 0-1.53 1.53c-.176.346-.276.766-.328 1.403C4 7.955 4 8.772 4 9.9v1.6a.5.5 0 0 1-1 0V9.877c0-1.1 0-1.958.056-2.645.057-.698.175-1.265.434-1.775A4.5 4.5 0 0 1 5.457 3.49c.51-.26 1.077-.377 1.775-.434C7.92 3 8.776 3 9.877 3" clipRule="evenodd" />
      </G>
    </Svg>
  );
};