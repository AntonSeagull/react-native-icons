

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiJulia = (props: IconProps) => {

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
          <Path d="M11.138 17.569a5.569 5.569 0 1 1-11.138 0 5.569 5.569 0 1 1 11.138 0zm6.431-11.138a5.569 5.569 0 1 1-11.138 0 5.569 5.569 0 1 1 11.138 0zM24 17.569a5.569 5.569 0 1 1-11.138 0 5.569 5.569 0 1 1 11.138 0z" />
        </G>
      </Svg>
    );
  }

