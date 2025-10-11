

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiSlumberingSanctuary = (props: IconProps) => {

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
          <Path d="M104.7 25.61L79.29 51.07 202 173.9v312.5h36V158.9zm302.6 0L274 158.9v327.5h36V173.9L432.7 51.07zM66.75 89.66L41.29 115.1 132 205.9v222.5h36V190.9zm378.55 0L344 190.9v237.5h36V205.9l90.7-90.8zM42.75 169.7l-25.46 25.4 42.73 42.8v116.5h36V222.9zm426.55 0L416 222.9v131.5h36V237.9l42.7-42.8z" fill="#000" />
        </G>
      </Svg>
    );
  }

