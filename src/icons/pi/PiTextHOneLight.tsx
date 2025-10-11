

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTextHOneLight = (props: IconProps) => {

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
          <Path d="M230,112v96a6,6,0,0,1-12,0V123.21L203.33,133a6,6,0,0,1-6.66-10l24-16a6,6,0,0,1,9.33,5ZM144,50a6,6,0,0,0-6,6v54H46V56a6,6,0,0,0-12,0V176a6,6,0,0,0,12,0V122h92v54a6,6,0,0,0,12,0V56A6,6,0,0,0,144,50Z" />
        </G>
      </Svg>
    );
  }

