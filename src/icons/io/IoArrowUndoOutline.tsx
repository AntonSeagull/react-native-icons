

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoArrowUndoOutline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M240,424V328c116.4,0,159.39,33.76,208,96,0-119.23-39.57-240-208-240V88L64,256Z" />
        </G>
      </Svg>
    );
  }

