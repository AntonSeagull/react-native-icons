

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowBendLeftDownDuotone = (props: IconProps) => {

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
          <Path d="M152,176l-48,48L56,176Z" />
          <Path d="M200,24A104.11,104.11,0,0,0,96,128v40H56a8,8,0,0,0-5.66,13.66l48,48a8,8,0,0,0,11.32,0l48-48A8,8,0,0,0,152,168H112V128a88.1,88.1,0,0,1,88-88,8,8,0,0,0,0-16ZM104,212.69,75.31,184h57.38Z" />
        </G>
      </Svg>
    );
  }

