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

export const LiaPushed = (props: IconProps) => {
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
        <Path d="M20.531 4.004a1.4 1.4 0 0 0-.363.02L5.631 6.401c-.81.145-1.393.981-1.147 1.961l5.631 18.662c.348 1.141 1.967 1.297 2.557.375l1.89-4.328 12.829-12.394c.879-.9.229-2.299-.934-2.4l-5.502-.481.75-1.791c.487-1.102-.321-1.933-1.174-2.002m-.16 1.15c.273-.038.402.134.28.397l-.901 2.138-9.506-.873zM5.97 7.576l13.326 1.217-5.193 12.36L5.64 8.062c-.166-.274.055-.535.328-.487m14.52 1.328 5.925.522c.215.058.308.282.14.459l-10.872 10.47zM6.755 11.91l6.842 10.588c-.375.803-1.885 4.238-1.885 4.238-.14.214-.425.168-.506-.062z" />
      </G>
    </Svg>
  );
};