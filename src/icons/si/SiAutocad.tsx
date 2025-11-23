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

export const SiAutocad = (props: IconProps) => {
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
        <Path d="M3.867 1.053v.015L0 3.385v17.914l3.897-2.332h18.34V2.33c0-.702-.578-1.277-1.28-1.277zm7.506 4.01h3.3l2.985 9.95H15.07l-.568-2.189h-2.984l-.57 2.162H8.53zm11.863.027v14.877H4.172l-2.068 1.238v.465c0 .702.579 1.277 1.28 1.277H24V5.09zm-10.27 1.592-.993 4.324h2.046z" />
      </G>
    </Svg>
  );
};