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

export const VscReferences = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="m11.105 4.561-3.43 3.427-1.134-1.12 2.07-2.08h-4.8a2.4 2.4 0 1 0 0 4.8h.89v1.6h-.88a4 4 0 0 1 0-7.991h4.8L6.54 1.13 7.675 0l3.43 3.432zM16.62 24h-9.6l-.8-.8V10.412l.8-.8h9.6l.8.8V23.2zm-8.8-1.6h8V11.212h-8zm5.6-20.798h9.6l.8.8v12.786l-.8.8h-4v-1.6h3.2V3.2h-8v4.787h-1.6V2.401l.8-.8zm.8 11.186h-4.8v1.6h4.8zm-4.8 3.2h4.8v1.6h-4.8zm4.8 3.2h-4.8v1.6h4.8zm1.6-14.4h4.8v1.6h-4.8zm4.8 6.4h-1.6v1.6h1.6zm-3.338-3.176v-.024h3.338v1.6h-1.762z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};