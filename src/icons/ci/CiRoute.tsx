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

export const CiRoute = (props: IconProps) => {
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
        <Path d="M21.792 17.086c-.58-.58-1.16-1.17-1.75-1.75-.08-.08-.16-.17-.25-.25a.49.49 0 0 0-.7 0 .5.5 0 0 0 0 .71l1.14 1.14H9.282a2.22 2.22 0 0 1 0-4.44h3a3.215 3.215 0 1 0 0-6.43h-5.27a2.5 2.5 0 1 0 0 1h5.27a2.215 2.215 0 1 1 0 4.43h-3a3.22 3.22 0 1 0 0 6.44h10.96l-.9.9c-.09.08-.17.17-.25.25a.5.5 0 0 0 0 .71.51.51 0 0 0 .7 0l1.75-1.75.25-.25a.5.5 0 0 0 0-.71m-17.23-9.02a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5" />
      </G>
    </Svg>
  );
};