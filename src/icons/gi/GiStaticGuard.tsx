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

export const GiStaticGuard = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m190.39 18.406 13.176 64.625h41.957l-.002 18.69h-38.145l7.635 37.438h82.63l7.45-37.44h-40.88V83.032h44.597l12.855-64.61-131.273-.014zM331.8 63.238l-18.823 94.608h-113.23l-18.99-93.127L38.98 114.395l148.973 247.342-60.967-203.168 17.9-5.37 39.247 130.784 72.35 10.62 71.53-10.696 39.094-130.664 17.905 5.358-60.018 200.587L473.06 114.323zm-9.708 240.45-65.582 9.81-66.447-9.754 56.59 188.578V339.475h18.69v152.847h.31l56.44-188.633z" />
      </G>
    </Svg>
  );
};