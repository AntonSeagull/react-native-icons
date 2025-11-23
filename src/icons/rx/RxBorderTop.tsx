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

export const RxBorderTop = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M14 1.75H1V.25h13z" clipRule="evenodd" />
        <Rect width={1} height={1} x={8} y={10} fill="currentColor" rx={0.5} transform="rotate(-180 8 10)" />
        <Rect width={1} height={1} x={2} y={10} fill="currentColor" rx={0.5} transform="rotate(-180 2 10)" />
        <Rect width={1} height={1} x={8} y={12} fill="currentColor" rx={0.5} transform="rotate(-180 8 12)" />
        <Rect width={1} height={1} x={2} y={12} fill="currentColor" rx={0.5} transform="rotate(-180 2 12)" />
        <Rect width={1} height={1} x={8} y={8} fill="currentColor" rx={0.5} transform="rotate(-180 8 8)" />
        <Rect width={1} height={1} x={8} y={14} fill="currentColor" rx={0.5} transform="rotate(-180 8 14)" />
        <Rect width={1} height={1} x={2} y={8} fill="currentColor" rx={0.5} transform="rotate(-180 2 8)" />
        <Rect width={1} height={1} x={2} y={14} fill="currentColor" rx={0.5} transform="rotate(-180 2 14)" />
        <Rect width={1} height={1} x={10} y={8} fill="currentColor" rx={0.5} transform="rotate(-180 10 8)" />
        <Rect width={1} height={1} x={10} y={14} fill="currentColor" rx={0.5} transform="rotate(-180 10 14)" />
        <Rect width={1} height={1} x={12} y={8} fill="currentColor" rx={0.5} transform="rotate(-180 12 8)" />
        <Rect width={1} height={1} x={12} y={14} fill="currentColor" rx={0.5} transform="rotate(-180 12 14)" />
        <Rect width={1} height={1} x={6} y={8} fill="currentColor" rx={0.5} transform="rotate(-180 6 8)" />
        <Rect width={1} height={1} x={6} y={14} fill="currentColor" rx={0.5} transform="rotate(-180 6 14)" />
        <Rect width={1} height={1} x={4} y={8} fill="currentColor" rx={0.5} transform="rotate(-180 4 8)" />
        <Rect width={1} height={1} x={4} y={14} fill="currentColor" rx={0.5} transform="rotate(-180 4 14)" />
        <Rect width={1} height={1} x={8} y={6} fill="currentColor" rx={0.5} transform="rotate(-180 8 6)" />
        <Rect width={1} height={1} x={2} y={6} fill="currentColor" rx={0.5} transform="rotate(-180 2 6)" />
        <Rect width={1} height={1} x={8} y={4} fill="currentColor" rx={0.5} transform="rotate(-180 8 4)" />
        <Rect width={1} height={1} x={2} y={4} fill="currentColor" rx={0.5} transform="rotate(-180 2 4)" />
        <Rect width={1} height={1} x={14} y={10} fill="currentColor" rx={0.5} transform="rotate(-180 14 10)" />
        <Rect width={1} height={1} x={14} y={12} fill="currentColor" rx={0.5} transform="rotate(-180 14 12)" />
        <Rect width={1} height={1} x={14} y={8} fill="currentColor" rx={0.5} transform="rotate(-180 14 8)" />
        <Rect width={1} height={1} x={14} y={14} fill="currentColor" rx={0.5} transform="rotate(-180 14 14)" />
        <Rect width={1} height={1} x={14} y={6} fill="currentColor" rx={0.5} transform="rotate(-180 14 6)" />
        <Rect width={1} height={1} x={14} y={4} fill="currentColor" rx={0.5} transform="rotate(-180 14 4)" />
      </G>
    </Svg>
  );
};