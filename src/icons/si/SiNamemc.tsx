

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiNamemc = (props: IconProps) => {

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
          <Path d="M0 0v24h24V0Zm4.8 4.8H16V8h3.2v11.2H16V8H8v11.2H4.8V8Z" />
        </G>
      </Svg>
    );
  }

