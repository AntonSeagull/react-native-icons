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

export const LiaAffiliatetheme = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M12.104 5c-1.867.016-4.728 1.95-7.067 4.955-2.879 3.7-3.89 7.604-2.256 8.74 1.634 1.126 5.303-.962 8.182-4.66s3.89-7.602 2.256-8.728c-.307-.211-.685-.31-1.115-.307m17.88 6c-3.8 6.359-9.896 9.542-13.625 7.266-1.284-.786-2.074-2.451-2.365-4.266-1.976 3.66-5.786 6.903-9.994 8 2.681 3.188 6.838 5 11.314 5 8.087 0 14.647-6.622 14.647-14.799.01-.459.066-.764.023-1.201" />
      </G>
    </Svg>
  );
};