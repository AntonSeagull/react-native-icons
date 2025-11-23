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

export const TiPointOfInterest = (props: IconProps) => {
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
        <Path d="M16.5 11c1.93 0 3.5-1.57 3.5-3.5S18.43 4 16.5 4 13 5.57 13 7.5V9h-2V7.5C11 5.57 9.43 4 7.5 4S4 5.57 4 7.5 5.57 11 7.5 11H9v2H7.5C5.57 13 4 14.57 4 16.5S5.57 20 7.5 20s3.5-1.57 3.5-3.5V15h2v1.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5H15v-2zM15 7.5a1.501 1.501 0 0 1 3 0c0 .826-.673 1.5-1.5 1.5H15zm-6 9c0 .826-.673 1.5-1.5 1.5S6 17.326 6 16.5c0-.828.673-1.5 1.5-1.5H9zM9 9H7.5A1.501 1.501 0 1 1 9 7.5zm4 4h-2v-2h2zm3.5 2a1.501 1.501 0 0 1 0 3c-.827 0-1.5-.674-1.5-1.5V15z" />
      </G>
    </Svg>
  );
};