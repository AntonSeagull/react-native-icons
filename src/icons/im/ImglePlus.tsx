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

export const ImglePlus = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M5.091 7.147v1.747h2.888c-.116.75-.872 2.197-2.888 2.197-1.737 0-3.156-1.441-3.156-3.216s1.419-3.216 3.156-3.216c.991 0 1.65.422 2.028.784L8.5 4.112c-.888-.828-2.037-1.331-3.409-1.331C2.275 2.784 0 5.059 0 7.875s2.275 5.091 5.091 5.091c2.937 0 4.888-2.066 4.888-4.975 0-.334-.037-.591-.081-.844zM16 7h-1.5V5.5H13V7h-1.5v1.5H13V10h1.5V8.5H16z" />
      </G>
    </Svg>
  );
};