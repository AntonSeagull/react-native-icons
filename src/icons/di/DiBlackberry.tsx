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

export const DiBlackberry = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#444" d="M24.177 15.734H21.1l.839-3.897h2.955c1.917 0 2.371.947 2.371 1.696 0 1.06-.683 2.201-3.088 2.201m1.943 3.351c0 1.06-.682 2.201-3.088 2.201h-3.077l.839-3.9h2.953c1.917 0 2.374.953 2.374 1.699zm-9.106-6.839H13.94l.839-3.897h2.95c1.92 0 2.377.947 2.377 1.696 0 1.06-.685 2.201-3.091 2.201zm2.021 3.665c0 1.06-.682 2.201-3.088 2.201h-3.074l.837-3.895h2.954c1.917 0 2.371.944 2.371 1.693zm-1.142 6.11c0 1.063-.682 2.201-3.083 2.201h-3.081l.839-3.9h2.955c1.916 0 2.37.95 2.37 1.699m-9.112-9.775H5.708l.834-3.897h2.955c1.917 0 2.376.947 2.376 1.696 0 1.06-.687 2.201-3.093 2.201zm2.026 3.665c0 1.06-.687 2.201-3.087 2.201H4.639l.84-3.895h2.953c1.919 0 2.376.944 2.376 1.693z" />
      </G>
    </Svg>
  );
};