

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiRhythmFill = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M2 9H4V21H2V9ZM8 3H10V21H8V3ZM14 12H16V21H14V12ZM20 6H22V21H20V6Z" />
        </G>
      </Svg>
    );
  }

