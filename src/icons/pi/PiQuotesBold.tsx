

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiQuotesBold = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M100,52H40A20,20,0,0,0,20,72v64a20,20,0,0,0,20,20H96v4a28,28,0,0,1-28,28,12,12,0,0,0,0,24,52.06,52.06,0,0,0,52-52V72A20,20,0,0,0,100,52Zm-4,80H44V76H96ZM216,52H156a20,20,0,0,0-20,20v64a20,20,0,0,0,20,20h56v4a28,28,0,0,1-28,28,12,12,0,0,0,0,24,52.06,52.06,0,0,0,52-52V72A20,20,0,0,0,216,52Zm-4,80H160V76h52Z" />
        </G>
      </Svg>
    );
  }

