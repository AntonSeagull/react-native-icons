

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiManjaro = (props: IconProps) => {

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
          <Path d="M0 0v24h6.75V6.75h8.625V0H0zm8.625 8.625V24h6.75V8.625h-6.75zM17.25 0v24H24V0h-6.75z" />
        </G>
      </Svg>
    );
  }

