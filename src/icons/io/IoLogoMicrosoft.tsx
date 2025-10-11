

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoLogoMicrosoft = (props: IconProps) => {

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
          <Path d="M31.87,30.58H244.7V243.39H31.87Z" />
          <Path d="M266.89,30.58H479.7V243.39H266.89Z" />
          <Path d="M31.87,265.61H244.7v212.8H31.87Z" />
          <Path d="M266.89,265.61H479.7v212.8H266.89Z" />
        </G>
      </Svg>
    );
  }

