

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscPiano = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8, 8)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M1 2L0 3V9H1V3H3V8.5L3.5 9H4.5L5 8.5V3H7V8.5L7.5 9H8.5L9 8.5V3H11V8.5L11.5 9H12.5L13 8.5V3H15V13H12V10H11V13H8.5V10H7.5V13H5V10H4V13H1V9H0V13L1 14H15L16 13V3L15 2H1Z" />
        </G>
      </Svg>
    );
  }

