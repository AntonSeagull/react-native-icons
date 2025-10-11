

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiKibana = (props: IconProps) => {

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
          <Path d="M2.625 0v21.591L21.375 0zm10.864 12.47L3.477 24h17.522a18.755 18.755 0 0 0-7.51-11.53z" />
        </G>
      </Svg>
    );
  }

