

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowElbowUpLeftDuotone = (props: IconProps) => {

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
          <Path d="M96,32v96L48,80Z" />
          <Path d="M192,72H104V32a8,8,0,0,0-13.66-5.66l-48,48a8,8,0,0,0,0,11.32l48,48A8,8,0,0,0,104,128V88h80V224a8,8,0,0,0,16,0V80A8,8,0,0,0,192,72ZM88,108.69,59.31,80,88,51.31Z" />
        </G>
      </Svg>
    );
  }

