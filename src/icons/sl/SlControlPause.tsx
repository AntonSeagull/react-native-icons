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

export const SlControlPause = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 1024 1024"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 512, 512)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M416.272 0H192.064c-17.664 0-32 14.32-32 32v960c0 17.664 14.336 32 32 32h224.208c17.68 0 32-14.336 32-32V32c0-17.68-14.32-32-32-32m-32 960H224.064V64h160.208zM831.937 0H608.881c-17.68 0-32 14.32-32 32v960c0 17.664 14.32 32 32 32h223.056c17.68 0 32-14.336 32-32V32c0-17.68-14.304-32-32-32m-32 960H640.881V64h159.056z" />
      </G>
    </Svg>
  );
};