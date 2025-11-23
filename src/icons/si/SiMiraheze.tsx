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

export const SiMiraheze = (props: IconProps) => {
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
        <Path d="m2.677 12.923 3.768.011 1.949 3.369-1.926 3.323H2.666L.727 16.292zm-.004-8.6 3.761.011 1.944 3.367-1.922 3.326H2.662L.727 7.69zm14.882 0 3.768.011 1.95 3.367-1.928 3.326h-3.801L15.606 7.69zm0 8.6 3.768.011 1.95 3.369-1.928 3.323h-3.802l-1.937-3.334zm-7.456 4.373 3.767.011 1.951 3.368L13.889 24h-3.801l-1.939-3.336zm0-17.296 3.767.011 1.951 3.369-1.928 3.324h-3.801L8.149 3.368zm0 8.628 3.767.011 1.951 3.368-1.928 3.325h-3.801l-1.939-3.336z" />
      </G>
    </Svg>
  );
};