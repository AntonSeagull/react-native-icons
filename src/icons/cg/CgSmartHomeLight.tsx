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

export const CgSmartHomeLight = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M7.034 6.5a5 5 0 0 1 10 0v4a5 5 0 0 1-10 0zm8 0v4a3 3 0 0 1-6 0v-4a3 3 0 0 1 6 0" clipRule="evenodd" />
        <Path fill="currentColor" d="M12.034 16.5a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1M7.744 16.44a1 1 0 1 1 1.88.684l-1.368 3.759a1 1 0 1 1-1.88-.684zM14.974 15.842a1 1 0 0 0-.598 1.282l1.369 3.759a1 1 0 1 0 1.879-.684l-1.368-3.76a1 1 0 0 0-1.282-.597" />
      </G>
    </Svg>
  );
};