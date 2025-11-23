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

export const TiSocialAtCircular = (props: IconProps) => {
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
        <Path d="M11.844 7.5c-2.481 0-4.438 2.019-4.438 4.5s2.05 4.5 4.531 4.5c.908 0 1.799-.27 2.547-.778a.5.5 0 0 0 .139-.694.495.495 0 0 0-.691-.132 3.47 3.47 0 0 1-1.965.604c-1.93 0-3.499-1.57-3.499-3.5s1.446-3.5 3.376-3.5 3.375 1.57 3.375 3.5v.25a.75.75 0 0 1-1.5 0V10.5c0-.276-.099-.5-.375-.5-.205 0-.318.124-.396.301a1.86 1.86 0 0 0-1.01-.301c-1.104 0-1.984.896-1.984 2a2.008 2.008 0 0 0 3.446 1.391c.319.369.664.609 1.192.609.965 0 1.627-.785 1.627-1.75V12c0-2.481-1.894-4.5-4.375-4.5m.125 5.5c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1M12 21c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9-4.037 9-9 9m0-16c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7" />
      </G>
    </Svg>
  );
};