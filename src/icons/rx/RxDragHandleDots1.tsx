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

export const RxDragHandleDots1 = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 15 15"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 7.5, 7.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Circle cx={4.5} cy={2.5} r={0.6} fill="currentColor" />
        <Circle cx={4.5} cy={4.5} r={0.6} fill="currentColor" />
        <Circle cx={4.5} cy={6.499} r={0.6} fill="currentColor" />
        <Circle cx={4.5} cy={8.499} r={0.6} fill="currentColor" />
        <Circle cx={4.5} cy={10.498} r={0.6} fill="currentColor" />
        <Circle cx={4.5} cy={12.498} r={0.6} fill="currentColor" />
        <Circle cx={6.5} cy={2.5} r={0.6} fill="currentColor" />
        <Circle cx={6.5} cy={4.5} r={0.6} fill="currentColor" />
        <Circle cx={6.5} cy={6.499} r={0.6} fill="currentColor" />
        <Circle cx={6.5} cy={8.499} r={0.6} fill="currentColor" />
        <Circle cx={6.5} cy={10.498} r={0.6} fill="currentColor" />
        <Circle cx={6.5} cy={12.498} r={0.6} fill="currentColor" />
        <Circle cx={8.499} cy={2.5} r={0.6} fill="currentColor" />
        <Circle cx={8.499} cy={4.5} r={0.6} fill="currentColor" />
        <Circle cx={8.499} cy={6.499} r={0.6} fill="currentColor" />
        <Circle cx={8.499} cy={8.499} r={0.6} fill="currentColor" />
        <Circle cx={8.499} cy={10.498} r={0.6} fill="currentColor" />
        <Circle cx={8.499} cy={12.498} r={0.6} fill="currentColor" />
        <Circle cx={10.499} cy={2.5} r={0.6} fill="currentColor" />
        <Circle cx={10.499} cy={4.5} r={0.6} fill="currentColor" />
        <Circle cx={10.499} cy={6.499} r={0.6} fill="currentColor" />
        <Circle cx={10.499} cy={8.499} r={0.6} fill="currentColor" />
        <Circle cx={10.499} cy={10.498} r={0.6} fill="currentColor" />
        <Circle cx={10.499} cy={12.498} r={0.6} fill="currentColor" />
      </G>
    </Svg>
  );
};