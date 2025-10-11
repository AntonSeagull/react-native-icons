

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCurrencyDollarSimpleLight = (props: IconProps) => {

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
          <Path d="M198,168a46.06,46.06,0,0,1-46,46H134v18a6,6,0,0,1-12,0V214H104a46.06,46.06,0,0,1-46-46,6,6,0,0,1,12,0,34,34,0,0,0,34,34h48a34,34,0,0,0,0-68H112a46,46,0,0,1,0-92h10V24a6,6,0,0,1,12,0V42h10a46.06,46.06,0,0,1,46,46,6,6,0,0,1-12,0,34,34,0,0,0-34-34H112a34,34,0,0,0,0,68h40A46.06,46.06,0,0,1,198,168Z" />
        </G>
      </Svg>
    );
  }

