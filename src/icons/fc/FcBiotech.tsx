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

export const FcBiotech = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#AD1457" d="M36 4c0 9.3-6 13.2-12.8 17.8C16.1 26.5 8 31.8 8 44h4c0-10.1 6.5-14.4 13.4-18.9C32.2 20.6 40 15.4 40 4z" />
        <Path fill="#AD1457" d="M38 41H11c-.6 0-1-.4-1-1s.4-1 1-1h27c.6 0 1 .4 1 1s-.4 1-1 1M36 37H12c-.6 0-1-.4-1-1s.4-1 1-1h24c.6 0 1 .4 1 1s-.4 1-1 1M34 33H14c-.6 0-1-.4-1-1s.4-1 1-1h20c.6 0 1 .4 1 1s-.4 1-1 1M29 29H19c-.6 0-1-.4-1-1s.4-1 1-1h10c.6 0 1 .4 1 1s-.4 1-1 1" />
        <Path fill="#E91E63" d="M37 9H10c-.6 0-1-.4-1-1s.4-1 1-1h27c.6 0 1 .4 1 1s-.4 1-1 1M36 13H12c-.6 0-1-.4-1-1s.4-1 1-1h24c.6 0 1 .4 1 1s-.4 1-1 1M34 17H14c-.6 0-1-.4-1-1s.4-1 1-1h20c.6 0 1 .4 1 1s-.4 1-1 1M29 21H19c-.6 0-1-.4-1-1s.4-1 1-1h10c.6 0 1 .4 1 1s-.4 1-1 1" />
        <Path fill="#E91E63" d="M40 44h-4c0-10.1-6.5-14.4-13.4-18.9C15.8 20.6 8 15.4 8 4h4c0 9.3 6 13.2 12.8 17.8C31.9 26.5 40 31.8 40 44" />
      </G>
    </Svg>
  );
};