

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const WiHurricaneWarning = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 30 30"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M7.8,24.6V7.45h1.13V24.6H7.8z M9.73,21.52v-6.6h8.55v6.6H9.73z M9.73,14.05v-6.6h8.55v6.6H9.73z M12.09,19.52h3.81v-2.51
	h-3.81V19.52z M12.09,12.05h3.81v-2.5h-3.81V12.05z" />
        </G>
      </Svg>
    );
  }

