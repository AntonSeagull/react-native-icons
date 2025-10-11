

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowElbowLeftUpDuotone = (props: IconProps) => {

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
          <Path d="M136,96H40L88,48Z" />
          <Path d="M232,184H96V104h40a8,8,0,0,0,5.66-13.66l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,40,104H80v88a8,8,0,0,0,8,8H232a8,8,0,0,0,0-16ZM88,59.31,116.69,88H59.31Z" />
        </G>
      </Svg>
    );
  }

