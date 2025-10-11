

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiColumnsPlusLeftLight = (props: IconProps) => {

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
          <Path d="M128,34H104A14,14,0,0,0,90,48V208a14,14,0,0,0,14,14h24a14,14,0,0,0,14-14V48A14,14,0,0,0,128,34Zm2,174a2,2,0,0,1-2,2H104a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2h24a2,2,0,0,1,2,2ZM200,34H176a14,14,0,0,0-14,14V208a14,14,0,0,0,14,14h24a14,14,0,0,0,14-14V48A14,14,0,0,0,200,34Zm2,174a2,2,0,0,1-2,2H176a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2h24a2,2,0,0,1,2,2ZM70,128a6,6,0,0,1-6,6H46v18a6,6,0,0,1-12,0V134H16a6,6,0,0,1,0-12H34V104a6,6,0,0,1,12,0v18H64A6,6,0,0,1,70,128Z" />
        </G>
      </Svg>
    );
  }

