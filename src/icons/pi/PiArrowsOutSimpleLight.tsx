

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowsOutSimpleLight = (props: IconProps) => {

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
          <Path d="M214,48V96a6,6,0,0,1-12,0V62.48l-53.76,53.76a6,6,0,0,1-8.48-8.48L193.52,54H160a6,6,0,0,1,0-12h48A6,6,0,0,1,214,48ZM107.76,139.76,54,193.52V160a6,6,0,0,0-12,0v48a6,6,0,0,0,6,6H96a6,6,0,0,0,0-12H62.48l53.76-53.76a6,6,0,0,0-8.48-8.48Z" />
        </G>
      </Svg>
    );
  }

