

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Imma = (props: IconProps) => {

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
          <Path  d="M14.713 11.48l0.694-1.48h0.594l-1 6h-15v-1.16l5.18-6.113-5.18-5.18v-3.547h15.313l0.688 4h-0.537l-0.293-0.607c-0.552-1.146-0.967-1.393-2.17-1.393h-10.344l5.517 5.516-4.647 5.483h8.474c1.813 0 2.291-0.65 2.713-1.52z" />
        </G>
      </Svg>
    );
  }

