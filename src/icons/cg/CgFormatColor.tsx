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

export const CgFormatColor = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M12.948 3.21A1 1 0 0 0 12 2.632a1 1 0 0 0-.948.576L5.135 15.898a1 1 0 1 0 1.813.845l1.45-3.111h7.203l1.451 3.111a1 1 0 0 0 1.813-.845zm1.72 8.422L12 5.909l-2.669 5.723z" clipRule="evenodd" />
        <Path fill="currentColor" d="M6 19.368a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2z" />
      </G>
    </Svg>
  );
};