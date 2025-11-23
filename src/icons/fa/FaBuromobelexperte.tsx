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

export const FaBuromobelexperte = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 448 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 224, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M0 32v128h128V32zm120 120H8V40h112zm40-120v128h128V32zm120 120H168V40h112zm40-120v128h128V32zm120 120H328V40h112zM0 192v128h128V192zm120 120H8V200h112zm40-120v128h128V192zm120 120H168V200h112zm40-120v128h128V192zm120 120H328V200h112zM0 352v128h128V352zm120 120H8V360h112zm40-120v128h128V352zm120 120H168V360h112zm40-120v128h128V352z" />
      </G>
    </Svg>
  );
};