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

export const SiVultr = (props: IconProps) => {
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
        <Path d="M8.36 2.172A1.2 1.2 0 0 0 7.348 1.6H1.2A1.2 1.2 0 0 0 0 2.8a1.2 1.2 0 0 0 .182.64l11.6 18.4a1.206 1.206 0 0 0 2.035 0l3.075-4.874a1.23 1.23 0 0 0 .182-.64 1.2 1.2 0 0 0-.182-.642zm10.349 8.68a1.206 1.206 0 0 0 2.035 0L21.8 9.178l2.017-3.2a1.2 1.2 0 0 0 .183-.64 1.23 1.23 0 0 0-.183-.64l-1.6-2.526a1.2 1.2 0 0 0-1.016-.571h-6.148a1.2 1.2 0 0 0-1.201 1.2 1.14 1.14 0 0 0 .188.64z" />
      </G>
    </Svg>
  );
};