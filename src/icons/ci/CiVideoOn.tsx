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

export const CiVideoOn = (props: IconProps) => {
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
        <Path d="M21.05 5.05a1.43 1.43 0 0 0-1.48.08l-3.32 2.24v-.81a2.5 2.5 0 0 0-2.5-2.5H4.69a2.5 2.5 0 0 0-2.5 2.5v10.88a2.5 2.5 0 0 0 2.5 2.5h9.06a2.5 2.5 0 0 0 2.5-2.5v-.81l3.32 2.24a1.5 1.5 0 0 0 .81.24 1.414 1.414 0 0 0 1.43-1.43V6.32a1.44 1.44 0 0 0-.76-1.27m-5.8 12.39a1.5 1.5 0 0 1-1.5 1.5H4.69a1.5 1.5 0 0 1-1.5-1.5V6.56a1.5 1.5 0 0 1 1.5-1.5h9.06a1.5 1.5 0 0 1 1.5 1.5Zm5.56.24a.42.42 0 0 1-.23.38.43.43 0 0 1-.45-.02l-3.88-2.62V8.58l3.88-2.62a.43.43 0 0 1 .45-.02.42.42 0 0 1 .23.38Z" data-name="Video On" />
      </G>
    </Svg>
  );
};