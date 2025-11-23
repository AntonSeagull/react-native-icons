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

export const TfiMusicAlt = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M6 .265v9.222a2.9 2.9 0 0 0-1.904-.726c-1.607 0-2.914 1.308-2.914 2.914s1.307 2.914 2.914 2.914a2.91 2.91 0 0 0 2.903-2.807v-.006c.001-.034.01-.066.01-.102s-.008-.067-.009-.101V5.479l9 1.761v4.666a2.9 2.9 0 0 0-1.914-.734c-1.607 0-2.914 1.308-2.914 2.914S12.479 17 14.086 17a2.913 2.913 0 0 0 2.907-2.849l.007.002V2.417zM4.096 13.589c-1.056 0-1.914-.858-1.914-1.914s.858-1.914 1.914-1.914c1.021 0 1.85.805 1.904 1.812v.203a1.91 1.91 0 0 1-1.904 1.813M7 4.461V1.479l9 1.762v2.98zM14.086 16c-1.056 0-1.914-.858-1.914-1.914s.858-1.914 1.914-1.914S16 13.03 16 14.086 15.142 16 14.086 16" />
      </G>
    </Svg>
  );
};