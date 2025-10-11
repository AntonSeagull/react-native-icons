

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiSquare = (props: IconProps) => {

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
          <Path d="M23.05 23.05V488.9H488.9V23.05zm17.9 17.9H471.1V471.1H40.95z" fill="#000" />
        </G>
      </Svg>
    );
  }

