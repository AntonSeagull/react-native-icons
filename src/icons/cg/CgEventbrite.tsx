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

export const CgEventbrite = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M14.673 17.438a6 6 0 0 1-6.819-1.234l14.01-6.533a10 10 0 0 0-.663-1.897C18.867 2.768 12.917.603 7.91 2.937s-7.17 8.284-4.836 13.29 8.284 7.17 13.289 4.836a9.97 9.97 0 0 0 5.317-6.077h-4.339a5.97 5.97 0 0 1-2.669 2.452M9.602 6.562a6 6 0 0 0-3.438 6.017l10.257-4.783a6 6 0 0 0-6.819-1.234" clipRule="evenodd" />
      </G>
    </Svg>
  );
};