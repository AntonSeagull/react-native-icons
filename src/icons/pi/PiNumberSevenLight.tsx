

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiNumberSevenLight = (props: IconProps) => {

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
          <Path d="M173.75,49.72l-48,160a6,6,0,1,1-11.5-3.45L159.94,54H88a6,6,0,0,1,0-12h80a6,6,0,0,1,5.75,7.72Z" />
        </G>
      </Svg>
    );
  }

